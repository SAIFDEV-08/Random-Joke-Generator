const content = document.getElementById("content")
const gen_btn = document.getElementById("gen-btn");
content.innerHTML = "Loading joke...";
async function getJoke(){
    try{
        gen_btn.disabled = true;
        let response= await fetch("https://official-joke-api.appspot.com/random_joke");
        if(!response.ok){
            throw new Error("API Error")
        }
        let data= await response.json();
        content.innerHTML=`${data.setup}<br><br>
        ${data.punchline} 😂`
        console.log(data)
    }catch(error){
        content.innerHTML=`Something went wrong`
        console.log(error);
    } finally{

        gen_btn.disabled = false;

    }
}