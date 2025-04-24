// Settings
const prefix = "<span class=\"fst-italic small\">fin.</span> ";
const project_dates = {
    "robodog": "2025-04-03",
    "tdx-sidechannel": "2024-08-01",
    "ssb-demod": "2024-05-14",
    "flightpga2": "2024-04-09",
    "flightpga": "2023-12-05",
    "treevisualizer": "2023-11-17",
    "simplebuck": "2023-04-01",
    "rapid": "2023-02-21",
    "picopowermeter": "2023-02-11",
    "remote-estop": "2023-02-01",
};

// Add dates (pretty hacky)
for (const project in project_dates) {
    const elem = document.getElementById(project);

    // Create footer
    const footer_elem = document.createElement("div");
    footer_elem.setAttribute("class", "card-footer text-muted");
    elem.appendChild(footer_elem);

    // Set date
    const date = moment(project_dates[project]);
    footer_elem.innerHTML = prefix + date.fromNow();

    // Tooltip
    footer_elem.setAttribute("data-bs-toggle", "tooltip");
    footer_elem.setAttribute("data-bs-placement", "top");
    footer_elem.setAttribute("data-bs-title", date.calendar())
    new bootstrap.Tooltip(footer_elem)
}
