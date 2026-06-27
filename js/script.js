const numEl = document.getElementById("num-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function () {
    if (numEl.value === "") {
        numEl.value = 0
    }
    length()
    volume()
    mass()
})

function length() {
    
    const feet = Number(numEl.value) * 3.28084
    const meters = Number(numEl.value) * 0.3048

    lengthEl.textContent = `${Number(numEl.value)} meters = ${feet.toFixed(2)} feet | ${Number(numEl.value)} feet = ${meters.toFixed(2)} meters`
}

function volume() {
    
    const liters = Number(numEl.value) * 3.78541
    const gallons = Number(numEl.value) * 0.264172

    volumeEl.textContent = `${Number(numEl.value)} liters = ${gallons.toFixed(2)} gallons | ${Number(numEl.value)} gallons = ${liters.toFixed(2)} liters`
}

function mass() {
    
    const kilos = Number(numEl.value) * 0.453592
    const pounds = Number(numEl.value) * 2.20462

    masEl.textContent = `${Number(numEl.value)} kilos = ${pounds.toFixed(2)} pounds | ${Number(numEl.value)} pounds = ${kilos.toFixed(2)} kilos`
}