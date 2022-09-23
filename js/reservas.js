async function deleteReserva(reservaId){
           try {         
            await fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/${reservaId}`,{
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                redirect: 'follow'
            });
            alert("Reserva excluída com sucesso!")
            window.location.href = "reservas.html";
        } catch (error) {
            alert("Não foi possível excluir reserva")
            console.log(error)
        }
}

async function listReservas() {
    try {
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/bookings", {
            headers: {
                "Content-Type": "application/json"
            }            
        });

        const data = await response.json();
        const btReservas = document.querySelector("tbody")

        data.forEach((event) => {

            const html = `<tr>
                <th scope="row">1</th>
                <td>${event.owner_name}</td>
                <td>${event.owner_email}</td>
                <td>${event.number_tickets}</td>
                <td>
                    <a href="editar-reserva.html?id=${event._id}" class="btn btn-secondary">editar</a>
                    <a id=${event._id} class="btn btn-danger">excluir</a>
                </td>
            </tr>`;       
            btReservas.innerHTML += html          

        });   

        const botoesDelete = document.querySelectorAll(".btn.btn-danger")
        botoesDelete.forEach((botao)=>{
            const id = botao.getAttribute("id")
                botao.addEventListener("click", function (){
                deleteReserva(id)
            })
        }) 
    } catch (error) {
        console.log(error)       
    }
} 

listReservas()




