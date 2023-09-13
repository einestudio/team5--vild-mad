// "https://evadagvbxyuoxojkujjj.supabase.co/rest/v1/vildmad_svampe"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YWRhZ3ZieHl1b3hvamt1ampqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MjM5NjcsImV4cCI6MjAwOTQ5OTk2N30.oui0N1mwqpMeY71DvXuaNMExuUVwIU0gaLPKon7UgiA"

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//fetch data
fetch("https://evadagvbxyuoxojkujjj.supabase.co/rest/v1/vildmad_svampe?id=eq."+ id , {
    method:"GET",
    headers: {
        apikey:
        key
    },
})


.then(response => response.json())
.then((data) => showMushroom(data));

//ændre indhold
function showMushroom(mushroom) {
const data = mushroom[0]
document.querySelector("p.id").textContent=data.id;
document.querySelector(".title").textContent=data.title;
document.querySelector("img").src = data.img;
document.querySelector(".description").textContent=data.description;
document.querySelector(".terrain").textContent=data.terrain;

//document.querySelector(".grid_1-1").appendChild(clone);

}
