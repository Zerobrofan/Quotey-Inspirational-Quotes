document.addEventListener('DOMContentLoaded', () => {
    getQuote();
});

async function getQuote() {
    try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const quoteElement = document.getElementById('quote');
        const authorElement = document.getElementById('author');

        if (quoteElement && authorElement) {
            const quote = data[randomIndex].text;
            const author = "~ "+ data[randomIndex].author || "~ null";
            quoteElement.innerHTML = quote;
            authorElement.innerHTML = author;
        }
    } catch (error) {
        console.error(error);
    }
}
