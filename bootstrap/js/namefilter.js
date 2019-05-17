// Toggle values
const rangeSlider = document.getElementById('invert-filter');

const dropdown = document.getElementById('blend-mode')

const root = document.documentElement

// Toggle updaters
function updateFilter(e) {
  root.style.setProperty('--filter', `invert(${this.value}%)`)
}

function updateBlend(e) {
  root.style.setProperty('--mix-blend-mode', this.value)
}


// Event listeners
rangeSlider.addEventListener("input", updateFilter)

dropdown.addEventListener("input", updateBlend)