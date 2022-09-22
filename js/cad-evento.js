const inpNome = document.querySelector("#nome");
const inpImg = document.querySelector("#banner")
const inpAtracoes = document.querySelector("#atracoes");
const inpDescricao = document.querySelector("#descricao");
const inpData = document.querySelector("#data");
const inpTickets = document.querySelector("#lotacao");
const newForm = document.querySelector(".col-6");

newForm.addEventListener("submit", cadEvent)

async function cadEvent(){

    try{      
        console.log(inpData.value)

        const newEvent = {
            "name": inpNome.value,
            "poster": inpImg.value,
            "attractions":inpAtracoes.value.split(","),
            "description": inpDescricao.value,
            "scheduled": new Date(inpData.value).toISOString(),
            "number_tickets": inpTickets.value,
        }; console.log(newEvent) 
  
        
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            redirect: 'follow',
            body: JSON.stringify(newEvent),
            
        });
        console.log(response)
    
    }catch (error){
    console.log("ta dando pau no cadastro " + error)
    };
    
}
