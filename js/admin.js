

// btEvento.addEventListener("click", listEvents)

async function listEvents(event) {
    // event.preventDefault();
    try {
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
            headers: {
                "Content-Type": "application/json"
            }            
        });
        const data = response.json();

        const btEvento = document.querySelector("tbody")

        data.articles.forEach((element) => {
        const html = `<tr>
            <th scope="row">1</th>
            <td>${element.scheduled}</td>
            <td>${article.name}</td>
            <td>${article.attractions}</td>
            <td>
                <a href="reservas.html" class="btn btn-dark">ver reservas</a>
                <a href="editar-evento.html?id=${article._id}" class="btn btn-secondary">editar</a>
                <a href="excluir-evento?id=${article._id}.html" class="btn btn-danger">excluir</a>
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