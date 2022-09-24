const inpNome = document.querySelector("#nome");
const inpImg = document.querySelector("#banner")
const inpAtracoes = document.querySelector("#atracoes");
const inpDescricao = document.querySelector("#descricao");
const inpData = document.querySelector("#data");
const inpTickets = document.querySelector("#lotacao");
const newForm = document.querySelector(".col-6");

newForm.addEventListener("submit", cadEvent)

async function cadEvent(event){
    event.preventDefault()   

    try{

        const newEvent = {
            "name": inpNome.value,
            "poster": inpImg.value,
            "attractions":inpAtracoes.value.split(","),
            "description": inpDescricao.value,
            "scheduled": new Date(inpData.value).toISOString(),
            "number_tickets": inpTickets.value,
        };
  
        
        await fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            redirect: 'follow',
            body: JSON.stringify(newEvent),
            
        });
    
        alert("Criado com Sucesso!")
        window.location.href = ("cadastro-evento.html")
    
    }catch (error){
    console.log(error)
    alert("Favor preencher todos os campos")
    };
}

