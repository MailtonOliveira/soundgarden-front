const inpNome = document.querySelector("#nome");
const inpImg = document.querySelector("#banner")
const inpAtracoes = document.querySelector("#atracoes");
const inpDescricao = document.querySelector("#descricao");
const inpData = document.querySelector("#data");
const inpTickets = document.querySelector("#lotacao");

const newForm = document.querySelector(".col-6");

const editName = document.querySelector("#nome");
const editImg = document.querySelector("#banner");
const editAtracoes = document.querySelector("#atraoes");
const editdescricao = document.querySelector("#descricao");
const editData = document.querySelector("#data");
const editTickets = document.querySelector("#lotacao");

async function viewEvent(){
    try {
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events/:id")
        
    } catch (error) {
        console.log("ta dando pau " + error)
        
    }
}