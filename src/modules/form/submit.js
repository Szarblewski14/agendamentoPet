import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Data atual para input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega data atual
selectedDate.value = inputToday

// Define a data minima como sendo data atual
selectedDate.min = inputToday

form.onsubmit = (event) => {
    //Previne carregamento da página
    event.preventDefault()
    
}