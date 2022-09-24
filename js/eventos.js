const Url = new URLSearchParams(window.location.search);
const idUrl = Url.get("id")

async function viewEvent() {

    try {
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
            headers: {
                "Content-Type": "application/json"
            },
            redirect: 'follow'
        })

        const data = await response.json()
        
        const clEvento = document.querySelector(".container.d-flex.justify-content-center.align-items-center.flex-wrap")

        data.forEach((event) => {
            const cardEv = `<article class="evento card p-5 m-3">
            <h2>${event.name} - ${new Date(event.scheduled).toLocaleDateString()}</h2>
            <h4>${event.attractions}</h4>
            <p>${event.description}</p>
            <button class="btn btn-primary">reservar ingresso</button>
        </article>`;

            clEvento.innerHTML += cardEv
        });

        

    } catch (error) {
        console.log(error)
    }
}



viewEvent() 

// const botoesModal = document.querySelectorAll(".btn.btn-primary")
//         botoesModal.forEach((botao) => {
//             const id = botao.getAttribute("id")
//             botao.addEventListener("click", function () {
//                 modal1.style.display = "block"(id)

//ABRIR MODAL





//FECHAR O MODAL
let modal1 = document.getElementById('#modal1')
let exitreserva = document.getElementById('submit')
exitreserva.onclick = () => {
modal1.style.display = "none"
}
