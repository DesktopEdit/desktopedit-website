const filterGroup = document.querySelector(".log-filters");
const filters = filterGroup.querySelectorAll("button");
const rows = document.querySelectorAll(".log-row");
const count = document.querySelector("#log-count");

filterGroup.hidden = false;
filterGroup.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    const level = button.dataset.filter;
    let visible = 0;

    for (const filter of filters) {
        filter.setAttribute("aria-pressed", String(filter === button));
    }

    for (const row of rows) {
        const show = level === "all" || row.dataset.level === level;
        row.hidden = !show;
        visible += Number(show);
    }

    count.textContent = level === "all" ? `${visible} lines` : `${visible} of ${rows.length} lines`;
});
