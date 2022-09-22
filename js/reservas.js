

// btEvento.addEventListener("click", listEvents)

async function listReservas(event) {
    // event.preventDefault();
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
                <a href="excluir.html?id=${event._id}" class="btn btn-danger">excluir</a>
            </td>
        </tr>`;

        btReservas.innerHTML += html
        console.log(html)
            
        });   


        
    } catch (error) {
        console.log("Ta dando pau " + error)
        
    }
} 
listReservas()