

const api="https://www.breakingbadapi.com/api/characters"

async function get(){
    const response=await fetch(api)
    const data=await response.json()
    //const print=data.map(m=>m.name)
   printdata(data)
}

function printdata(data){

    const header=document.querySelector("#header")
    const content=document.querySelector("#content")

    header.innerHTML+=`<select class="form-control" onchange="getfe(this.value)" >
    
    <option>select</option>
    ${data.map(characters=>`<option>${characters.name}</option>`)}
    </select>`

}


async function getfe(name){
    if(name!=`select`){
const response=await fetch(`${api}?name=${name}`)
const data=await response.json()


content.innerHTML+=`
<h4>${data[0].name}  (${data[0].nickname})</h4>
<img src="${data[0].img}" width="400"/>
`;
}
}




get()
getfe
