

async function viewEvent() {

    try {
        const response = await fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
            headers: {
                "Content-Type": "application/json"
            },
            redirect: 'follow'
        })

        const data = await response.json()
        const eventoIndex = data.slice(0, 3);
        const clIndex = document.querySelector(".container.d-flex.justify-content-center.align-items-center")

        eventoIndex.forEach((event) => {

            const cardIndex = `<article class="evento card p-5 m-3">
            <h2>${event.name} - ${new Date(event.scheduled).toLocaleDateString()}</h2>
            <h4>${event.attractions}</h4>
            <p>${event.description}</p>
            <a onclick="acao()"class="btn btn-primary">reservar ingresso</a>
        </article>`;
            clIndex.innerHTML += cardIndex
        });

        


    } catch (error) {
        console.log("ta dando pau no eventos " + error)
    }

    const controls = document.querySelectorAll(".control");
        let currentItem = 0;
        const items = document.querySelectorAll(".item");
        const maxItems = items.length;

        controls.forEach((control) => {
            control.addEventListener("click", (e) => {
                isLeft = e.target.classList.contains("arrow-left");

                if (isLeft) {
                    currentItem -= 1;
                } else {
                    currentItem += 1;
                }
                
                if (currentItem >= maxItems) {
                    currentItem = 0;
                }

                if (currentItem < 0) {
                    currentItem = maxItems -1;
                }
                
                items.forEach((item) => item.classList.remove("current-item"));
                
                items[currentItem].scrollIntoView({
                    inline: "center",
                    behavior: "smooth"
                });

                items[currentItem].classList.add("current-item");
                
            });
        });
}
viewEvent()