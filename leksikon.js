// https://evadagvbxyuoxojkujjj.supabase.co
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YWRhZ3ZieHl1b3hvamt1ampqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5MjM5NjcsImV4cCI6MjAwOTQ5OTk2N30.oui0N1mwqpMeY71DvXuaNMExuUVwIU0gaLPKon7UgiA"

fetch("https://evadagvbxyuoxojkujjj.supabase.co/rest/v1/vildmad_svampe",  {
    method:"GET",
    headers: {
        apikey:
        key
    },
})

    .then((res) => res.json())
    .then(showData); 

function showData(items) {
    console.log(items);
    // items.forEach()
}

