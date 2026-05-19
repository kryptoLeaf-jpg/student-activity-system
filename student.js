const events = [
    {
        title: "Hackathon",
        date: "20-05-2026"
    },

    {
        title: "Workshop",
        date: "25-05-2026"
    },

    {
        title: "Cultural Fest",
        date: "30-05-2026"
    }
];


render();


function render() {

    let container =
    document.getElementById("events");


    container.innerHTML =
    "";


    events.forEach(event => {

        container.innerHTML +=

        `
        <div>

            <h3>
                ${event.title}
            </h3>

            <p>
                ${event.date}
            </p>

            <button
            onclick="registerEvent('${event.title}')">

                Register

            </button>

        </div>
        `;

    });

}



function registerEvent(title){

    let joined =

    JSON.parse(
        localStorage.getItem("joined")
    )

    ||

    [];


    joined.push(title);


    localStorage.setItem(

        "joined",

        JSON.stringify(joined)

    );


    alert("Registered");

}