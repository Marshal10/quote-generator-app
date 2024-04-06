let quotes=[]
async function getQuotes(){
    const apiUrl='https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try{
        const response=await fetch(apiUrl)
        quotes=await response.json()
    }catch(error){

    }
}

getQuotes()