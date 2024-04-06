const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const xBtn = document.getElementById("x-btn");
const newQuoteBtn = document.getElementById("new-quote-btn");
const loader = document.querySelector(".loader");
let quotes = [];

function loading() {
  quoteContainer.hidden = true;
  loader.hidden = false;
}

function loadComplete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function newQuote() {
  loading();
  const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(newQuote);
  quoteText.textContent = newQuote.text;
  authorText.textContent = newQuote.author;

  if (newQuote.text.length > 120) {
    quoteText.classList.add("long-quote-text");
  } else {
    quoteText.classList.remove("long-quote-text");
  }
  loadComplete()
}

async function getQuotes() {
  loading();
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    quotes = await response.json();
    newQuote();
  } catch (error) {}
}

function postOnX() {
  const xUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(xUrl, "_blank");
}

xBtn.addEventListener("click", postOnX);
newQuoteBtn.addEventListener("click", newQuote);

getQuotes();
