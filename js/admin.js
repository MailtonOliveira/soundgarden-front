

// btEvento.addEventListener("click", listEvents)

async function listEvents(event) {
    // event.preventDefault();
    try {
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
            headers: {
                "Content-Type": "application/json"
            }            
        });
        const data = await response.json();

        const btEvento = document.querySelector("tbody")

        data.forEach((event) => {
        const html = `<tr>
            <th scope="row">1</th>
            <td>${event.scheduled}</td>
            <td>${event.name}</td>
            <td>${event.attractions}</td>
            <td>
                <a href="reservas.html" class="btn btn-dark">ver reservas</a>
                <a href="editar-evento.html?id=${event._id}" class="btn btn-secondary">editar</a>
                <a href="excluir-evento?id=${event._id}.html" class="btn btn-danger">excluir</a>
            </td>
        </tr>`;

        btEvento.innerHTML += html
        console.log(html)
            
        });


        


        
    } catch (error) {
        console.log("Ta dando pau " + error)
        
    }
} 
listEvents()