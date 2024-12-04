function toggleText(paragraphId) {
    var paragraph = document.getElementById(paragraphId);
    var icon = paragraph.previousElementSibling.querySelector(".read-more-icon");

    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        icon.innerHTML = "&minus;";
    } else {
        paragraph.style.display = "none";
        icon.innerHTML = "&plus;";
    }
}

function filterCards() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var themeFilter = document.getElementById("themeFilter").value;
    var cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        var title = card.getAttribute("data-title").toLowerCase();
        var themes = card.getAttribute("data-theme").split(" "); 

        var matchesTheme = themes.some(function (theme) {
            return theme === themeFilter || themeFilter === "all";
        });

        if (matchesTheme && title.includes(searchInput)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.card__picture');
    elements.forEach(function(element) {
        var imageUrl = element.getAttribute('data-image');
        if (imageUrl) {
            var gradient = '';
            if (element.classList.contains('card__picture--1')) {
                gradient = 'linear-gradient(to right bottom, #ffb900, #ff7730)';
            } else if (element.classList.contains('card__picture--2')) {
                gradient = 'linear-gradient(to right bottom, #7ed56f, #28b485)';
            } else if (element.classList.contains('card__picture--3')) {
                gradient = 'linear-gradient(to right bottom, #2998ff, #5643fa)';
            } else if (element.classList.contains('card__picture--4')) {
                gradient = 'linear-gradient(to right bottom, #d429ff, #cf43fa)';
            }
            
            var imagePath = "img/" + imageUrl;
            
            element.style.backgroundImage = gradient + ', url(' + imagePath + ')';
        }
    });
});
