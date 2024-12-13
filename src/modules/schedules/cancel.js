import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "./load.js"
const periods = document.querySelectorAll(".period")

// Gera evento de click para cada lista
periods.forEach((period) => {
    // captura eventoo de click na lista
    period.addEventListener("click", async (event) => {
        
        if(event.target.classList.contains("cancel-icon")){

            //obtem a li pai do elemento clicado
            const item = event.target.closest("li")
            const { id } = item.dataset

            if(id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar?")

                if (isConfirm){
                    
                    await scheduleCancel({ id })
                    
                    schedulesDay()
                }
            }
            
            
        }
        
    })
})
