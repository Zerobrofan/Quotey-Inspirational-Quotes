document.addEventListener('DOMContentLoaded', () => {
    getQuote();
    var genButton = document.getElementById('btn');
    // onClick's logic below:
    genButton.addEventListener('click', function () {
        getQuote();
    })
});


async function getQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        
        const quoteElement = document.getElementById('quote');
        const authorElement = document.getElementById('author');

        if (quoteElement && authorElement) {
            const quote = data.content;
            const author = "~ " + data.author || "~ null";
            quoteElement.innerHTML = quote;
            authorElement.innerHTML = author;
        }
    } catch (error) {
        console.error(error);
    }
}
