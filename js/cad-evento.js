const inpNome = document.querySelector("#nome");
const inpAtracoes = document.querySelector("#atracoes");
const inpDescricao = document.querySelector("#nome");
const inpData = document.querySelector("#data");
const inpTickets = document.querySelector("#lotacao");
const newForm = document.querySelector(".col-6");

newForm.addEventListener("submit", cadEvent)

async function cadEvent(event){
    event.preventDefault();
    try{      
        console.log(inpNome.value)
        const newEvent = {
            "\"name\"":inpNome.value,
            poster: "link da imagem",
            "attractions": [
                "atracoes"
            ],
            "description": "descricao",
            "scheduled": "2022-09-18T22:00:00.000Z",
            "number_tickets": 10
        }; console.log(newEvent)
        

           
        
        
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
            method: "POST",
            body: newEvent,
            Headers: { 
                "Content-Type": "application/json"
            },
            
            
        });
        console.log(response)

    
    }catch (error){
    console.log("ta dando pau no cadastro " + error)
    };
    
}
