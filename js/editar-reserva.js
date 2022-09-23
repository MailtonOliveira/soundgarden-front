const inpNome = document.querySelector("#nome");
const inpTickets = document.querySelector("#lotacao");
const inpEmail = document.querySelector("#email");

const newForm = document.querySelector(".col-6");

const editName = document.querySelector("#nome");
const editTickets = document.querySelector("#lotacao");
const editEmail = document.querySelector("#email");

const Url = new URLSearchParams(window.location.search);
const idUrl = Url.get("id")

async function viewEvent() {
    try {
        const response = await fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/${idUrl}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();

        editName.value = data.owner_name;
        editEmail.value = data.owner_email;
        editTickets.value = data.number_tickets;
    }
    catch (error) {
        console.log(error)
    }

}
viewEvent();

newForm.onsubmit = async (event) => {
    event.preventDefault();

    try {

        const newEvent = {
            "name": inpNome.value,
            "email": inpEmail.value,
            "number_tickets": inpTickets.value,
        };

        await fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/${idUrl}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEvent),
            redirect: 'follow'

        });

        alert("Reversa Editada! API não permite PUT")
        window.location.href = `editar-reserva.html?id=${idUrl}`;

    } catch (error) {
        console.log(error)
        alert("Não foi possível editar!")
    }
}