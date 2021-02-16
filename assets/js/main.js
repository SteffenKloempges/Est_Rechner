let jahresEinkommen = document.getElementById("incomeInput")
let zvE = document.getElementById("outputEST")
let maxTax = document.getElementById("outputALL")
let churchTax = document.getElementById("outputCHURCH")
let kirche = document.getElementById("churchTax")
let single = document.getElementById("singleIncome")
let married = document.getElementById("marriedIncome")
let year2021 = document.getElementById("year2021")
let year2020 = document.getElementById("year2020")
let year2019 = document.getElementById("year2019")


function calc() {

    if (married.checked) {
        jahresEinkommen.value / 2
    } else {
        jahresEinkommen.value
    }

    if (year2019.checked) {
        if (jahresEinkommen.value <= 9168) {
            zvE.innerHTML = "0"
        } else if (jahresEinkommen.value <= 14254) {
            let y = (jahresEinkommen.value - 9168) / 10000
            zvE.innerHTML = ((980.14 * y + 1400) * y).toFixed(2) + "€"
        } else if (jahresEinkommen.value <= 55960) {
            let y = (jahresEinkommen.value - 14254) / 10000
            zvE.innerHTML = ((216.16 * y + 2397) * y + 965.58).toFixed(2) + "€"
        } else if (jahresEinkommen.value <= 265326) {
            zvE.innerHTML = ((jahresEinkommen.value * 0.42) - 8780.90).toFixed(2) + "€"
        } else {
            zvE.innerHTML = ((jahresEinkommen.value * 0.45) - 16740.68).toFixed(2) + "€"
        }
    }

    if (year2020.checked) {
        if (jahresEinkommen.value <= 9408) {
            zvE.innerHTML = "0"
        } else if (jahresEinkommen.value <= 14532) {
            let y = (jahresEinkommen.value - 9408) / 10000
            zvE.innerHTML = ((972.87 * y + 1400) * y).toFixed(2) + "€"
        } else if (jahresEinkommen.value <= 57051) {
            let y = (jahresEinkommen.value - 14532) / 10000
            zvE.innerHTML = ((212.02 * y + 2397) * y + 972.79).toFixed(2) + "€"
        } else if (jahresEinkommen.value <= 270500) {
            zvE.innerHTML = ((jahresEinkommen.value * 0.42) - 8963.74).toFixed(2) + "€"
        } else {
            zvE.innerHTML = ((jahresEinkommen.value * 0.45) - 17078.74).toFixed(2) + "€"
        }
    }

    if (year2021.checked) {
        if (jahresEinkommen.value <= 9744) {
            zvE.innerHTML = "0"
        } else if (jahresEinkommen.value <= 14753) {
            let y = (jahresEinkommen.value - 9744) / 10000
            zvE.innerHTML = ((995.21 * y + 1400) * y).toFixed(2) + "€"
        } else if (jahresEinkommen.value <= 57918) {
            let y = (jahresEinkommen.value - 14753) / 10000
            zvE.innerHTML = ((208.85 * y + 2397) * y + 950.96).toFixed(2) + "€"
        } else if (jahresEinkommen.value <= 274612) {
            zvE.innerHTML = ((jahresEinkommen.value * 0.42) - 9136.63).toFixed(2) + "€"
        } else {
            zvE.innerHTML = ((jahresEinkommen.value * 0.45) - 17374.99).toFixed(2) + "€"
        }
    }

}