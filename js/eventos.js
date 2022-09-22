

async function viewEvent() {
    
    try{
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events",{
            headers:{
                "Content-Type": "application/json"
            },
            redirect: 'follow'
        })
        
        const data = await response.json()
        console.log(data)
        
        const clEvento = document.querySelector(".container.d-flex.justify-content-center.align-items-center.flex-wrap")

        data.forEach((event) => {
            const cardEv = `<article class="evento card p-5 m-3">
            <h2>${event.name}</h2>
            <h4>${event.attractions}</h4>
            <p>${event.description}</p>
            <a href="#" class="btn btn-primary">reservar ingresso</a>
        </article>`;
        console.log(clEvento)

        clEvento.innerHTML += cardEv
        
        
            
        });
    } catch (error) {
        console.log("ta dando pau no eventos " + error)
        
    }
    

}
viewEvent() 