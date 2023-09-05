const namesInput = document.getElementById("names-input");
const wheelContainer = document.getElementById("wheel-container");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const popupClose = document.getElementById("popup-close");
const popupRemove = document.getElementById("popup-remove");

const width = 700;
const height = 700;
const radius = Math.min(width, height) / 2;
let pieData = [];
let names = [];

// Add a variable to store the selected name
let selectedName;

namesInput.addEventListener("input", () => {
    names = namesInput.value.split("\n").filter(name => name.trim() !== "");
    if (names.length > 0) {
        createWheel(names);
    }
});

popupClose.addEventListener("click", () => {
    popup.style.display = "none";
    d3.select("#wheel-group").selectAll("path").attr("fill", (d) => d.data.color);
});

popupRemove.addEventListener("click", () => {
    const nameIndex = names.indexOf(selectedName);
    if (nameIndex > -1) {
        names.splice(nameIndex, 1);
        namesInput.value = names.join("\n");
        createWheel(names);
    }
    popup.style.display = "none";
});

function createWheel(names) {
    wheelContainer.innerHTML = "";
    const data = names.map((name, id) => ({ name, color: getRandomColor(), id }));
    const arc = d3.arc().innerRadius(radius * 0.1).outerRadius(radius);
    const pie = d3.pie().value(() => 1);
    const svg = d3.select(wheelContainer)
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");
    const wheel = svg.append("g")
        .attr("id", "wheel-group")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);
    pieData = pie(data);
    wheel.selectAll("path")
        .data(pieData)
        .enter()
        .append("path")
        .attr("fill", d => d.data.color)
        .attr("d", arc)
        .attr("stroke", "#fff")
        .attr("stroke-width", 2);
    wheel.selectAll("text")
        .data(pieData)
        .enter()
        .append("text")
        .attr("transform", d => `translate(${arc.centroid(d)}) rotate(${(d.startAngle + d.endAngle) / 2 * 180 / Math.PI - 90})`)
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .text(d => d.data.name)
        .attr("fill", "#000")
        .style("font-size", "18px");

    // Add Pointer
    svg.append("polygon")
        .attr("id", "pointer")
        .attr("points", `${width + 30},${height / 2 - 10} ${width - 30},${height / 2} ${width + 30},${height / 2 + 10}`)
        .attr("fill", "red");

    // Center spin button
    svg.append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", 50)
        .attr("id", "spin-btn")
        .attr("fill", "blue");
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", "#fff")
        .style("font-size", "24px")
        .text("SPIN");

    // Click to Spin text
    const clickToSpinText = svg.append("text")
        .attr("id", "click-to-spin-text")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .attr("text-anchor", "middle")
        .attr("fill", "#000")
        .attr("font-size", "36px");

    // Make the text curve along the border
    const path = svg.append("path")
        .attr("id", "click-to-spin-path")
        .attr("d", `M ${width / 2 - 100}, ${height / 2.3} a 200,200 0 1,1 400,0`)
        .attr("fill", "transparent");

    clickToSpinText.append("textPath")
        .attr("href", "#click-to-spin-path")
        .attr("startOffset", "25%")
        .text("Click to Spin");

    // Position and center the popup within the wheel container
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;
    const popupLeft = (width - popupWidth) / 0;
    const popupTop = (height - popupHeight) / 0.9;

    popup.style.left = `${popupLeft}px`;
    popup.style.top = `${popupTop}px`;

    svg.on("click", () => {
        spinWheel();
        d3.select("#click-to-spin-text").attr("visibility", "hidden");
    });
}

function getRandomColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function spinWheel() {
    const wheelGroup = d3.select("#wheel-group");
    const rotationPerName = 360 / names.length;
    const randomRotation = 360 * (Math.random() * 10 + 5);
    const rotation = randomRotation + rotationPerName;

    wheelGroup.transition()
        .duration(6000)
        .ease(d3.easeCubicOut)
        .attrTween("transform", () => {
            const interpolate = d3.interpolate(0, rotation);
            return t => `translate(${width / 2}, ${height / 2}) rotate(${interpolate(t)})`;
        })
        .on("end", () => {
            const adjustedRotation = (360 - (rotation % 360) + 90) % 360;
            const rotationInRadians = (adjustedRotation * Math.PI) / 180;
            const selectedIndex = pieData.findIndex(d => d.startAngle <= rotationInRadians && d.endAngle > rotationInRadians);
            
            selectedName = names[selectedIndex];

            if (selectedName !== undefined) {
                const selectedSlice = d3.select(wheelGroup.selectAll("path")._groups[0][selectedIndex]);
                selectedSlice.attr("fill", "red");

                let selectedText = "The selected name is: ";
                if (window.lucky_wheel_options && window.lucky_wheel_options.selected_text) {
                    selectedText = window.lucky_wheel_options.selected_text;
                }
                popupText.textContent = `${selectedText} ${selectedName}`;

                popup.style.display = "block";
                popup.style.left = `${(window.innerWidth - popup.offsetWidth) / 0}px`;
                popup.style.top = `${(window.innerHeight - popup.offsetHeight) / 0}px`;
                popupRemove.style.display = "inline-block";
                popupClose.style.display = "inline-block";
            } else {
                console.error(`Invalid index: ${selectedIndex}`);
            }
        });
}

// Load default names
createWheel(names);

// Load default names
if (window.lucky_wheel_options && window.lucky_wheel_options.default_names) {
    namesInput.value = window.lucky_wheel_options.default_names.replace(/\\n/g, "\n");
    namesInput.dispatchEvent(new Event("input"));
}
