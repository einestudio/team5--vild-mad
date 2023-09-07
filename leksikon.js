const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
const categoryParam = category ? "?category="+category :''

fetch("https://evadagvbxyuoxojkujjj.supabase.co/rest/v1/vildmad_svampe" + categoryParam)
// header (key)
    .then((res) => res.json())
    .then(showProducts);

