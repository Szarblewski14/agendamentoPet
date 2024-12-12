import { openingHours } from "../../utils/opening-hours.js"
import dayjs from "dayjs"

const hours = document.getElementById("hours")

export function hoursLoad ({date}) {
    const opening = openingHours.map((hour) => {
        //Recupera somente a hora 
        const [scheduleHour] = hour.split(":")

        //Adiciona a data na hora e verifica se está no passado 
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        return {
            hour,
            available: isHourPast,
        }
    })

    // Renderizando horarios
    opening.forEach(({ hour,available }) => {
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if(hour === "9:00") {
            hoursHeaderAdd("Manhã")
        }else if(hour === "13:00") {
            hoursHeaderAdd("Tarde")
        }else if(hour === "18:00"){
            hoursHeaderAdd("Noite")
        }

        hours.append(li)
    })
}

function hoursHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}