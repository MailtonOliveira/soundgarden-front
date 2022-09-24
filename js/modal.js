const inpNome = document.querySelector("#nome");
const inpTickets = document.querySelector("#lotacao");
const inpEmail = document.querySelector("#email");

const Url = new URLSearchParams(window.location.search);
const idUrl = Url.get("id")

async function cadReserva(event){
    event.preventDefault()   

    try{

        const newEvent = {
                "owner_name": inpNome.value,
                "owner_email": inpEmail.value,
                "number_tickets": inpTickets.value,
                "event_id":`${idUrl}`
        };
        
        
        await fetch("https://xp41-soundgarden-api.herokuapp.com/bookings", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            redirect: 'follow',
            body: JSON.stringify(newEvent),
            
        });
    
        alert("Reserva criada com Sucesso!")
        inpNome.value = ""
        inpEmail.value = ""
        inpTickets.value = ""
        
    }
    catch (error) {
        console.log(error)
    }

}
cadReserva();
