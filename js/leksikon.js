// PRODUCTLIST

const urlParams = new URLSearchParams(window.location.search);
const terrain = urlParams.get("terrain");
let categoryParam = "";
if (terrain) {
    categoryParam = "?terrain=eq."+terrain
}


// https://evadagvbxyuoxojkujjj.supabase.co
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YWRhZ3ZieHl1b3hvamt1ampqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MjM5NjcsImV4cCI6MjAwOTQ5OTk2N30.oui0N1mwqpMeY71DvXuaNMExuUVwIU0gaLPKon7UgiA"

fetch("https://evadagvbxyuoxojkujjj.supabase.co/rest/v1/vildmad_svampe"+categoryParam ,  {
    method:"GET",
    headers: {
        apikey:
        key
    },
})
    .then((res) => res.json()) 
    .then(showMushrooms); 

function showMushrooms(mushrooms){
    mushrooms.forEach(showMushroom);
}

function showMushroom(mushroom) {

    console.log(mushroom);
    const template = document.querySelector("#lexiconTemplate").content;
    const copy = template.cloneNode(true);

    copy.querySelector("p.id").textContent = mushroom.id;
    copy.querySelector("p.title").textContent = mushroom.title;
    copy.querySelector("img").src = mushroom.img;
    
    copy.querySelector(".billedeKlik").setAttribute("href", `svamp.html?id=${mushroom.id}`);
    document.querySelector(".lexiconGrid").appendChild(copy);
}

