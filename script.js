const quoteContainer=document.getElementById('quote-container')
const quoteText=document.getElementById('quote')
const authorText=document.getElementById('author')
const xBtn=document.getElementById('x-btn')
const newQuoteBtn=document.getElementById('new-quote-btn')
let quotes=[]

function newQuote(){
    const newQuote=quotes[Math.floor(Math.random() * quotes.length)]
    console.log(newQuote)
}

async function getQuotes(){
    const apiUrl='https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try{
        const response=await fetch(apiUrl)
        quotes=await response.json()
        newQuote()
    }catch(error){

    }
}

getQuotes()