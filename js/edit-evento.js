const inpNome = document.querySelector("#nome");
const inpImg = document.querySelector("#banner")
const inpAtracoes = document.querySelector("#atracoes");
const inpDescricao = document.querySelector("#descricao");
const inpData = document.querySelector("#data");
const inpTickets = document.querySelector("#lotacao");

const newForm = document.querySelector(".col-6");

const editName = document.querySelector("#nome");
const editImg = document.querySelector("#banner");
const editAtracoes = document.querySelector("#atracoes");
const editDescricao = document.querySelector("#descricao");
const editData = document.querySelector("#data");
const editTickets = document.querySelector("#lotacao");

const Url = new URLSearchParams(window.location.search);
const idUrl = Url.get("id")
// console.log(idUrl)


async function viewEvent(){
    try {
        const response = await fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${idUrl}`, {
            headers: {
                "Content-Type": "application/json"
            }   
            });
            const data = await response.json();
            console.log(data)
            editName.value = data.name;
            editImg.value = data.poster;
            editAtracoes.value = data.attractions;
            editDescricao.value = data.description;
            editData.value = data.scheduled;
            editTickets.value = data.number_tickets;

        
    } catch (error) {
        console.log("ta dando pau " + error)

        
    }
}
viewEvent();

newForm.onsubmit = (event) => {
    event.preventDefault();
}
