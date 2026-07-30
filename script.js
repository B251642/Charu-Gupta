// Search Function
function searchService() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}