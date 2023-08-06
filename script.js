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
        // First API
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
        console.error("First API error:", error);
        // If the first API fails, try the second API as a fallback
        try {
            const category = 'inspirational';
            const apiKey = 'XPaFGerzGF995V+dCY2fmw==D7GQLuMNoa8GLUlj';
            const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
                headers: {
                    'X-Api-Key': apiKey
                }
            });
            const data = await response.json();
            const randomIndex = Math.floor(Math.random() * data.length);
            const quoteElement = document.getElementById('quote');
            const authorElement = document.getElementById('author');

            if (quoteElement && authorElement) {
                const quote = data[randomIndex].quote;
                const author = "~ " + data[randomIndex].author || "~ null";
                quoteElement.innerHTML = quote;
                authorElement.innerHTML = author;
            }
        } catch (error) {
            console.error("Second API error:", error);
            // Display an error message if both APIs fail
            const quoteElement = document.getElementById('quote');
            const authorElement = document.getElementById('author');
            if (quoteElement && authorElement) {
                quoteElement.innerHTML = "Failed to fetch a quote.";
                authorElement.innerHTML = "~ null";
            }
        }
    }
}
