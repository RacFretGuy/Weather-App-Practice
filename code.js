const apiKey="f4db925a3d6842e5a0775307252703";
const url="http://api.weatherapi.com/v1/current.json?key=";
let query; 

search();

function getData(query){
   
    fetch(`${url}${apiKey}&q=${query}`)
        .then((response)=>{
            console.log(response);
            
            return response.json();
        })
        .then((data)=>{
            console.log(data);            
            console.log(data.current.temp_c);
            populateData(data); 
        })
        .catch((error)=>{
            let errorHtml=document.getElementById("list");
            errorHtml.appendChild(document.createElement("li"));
            console.log(error.message);
            
        })
    
}
function suggestions(){

}

function search(){


    let searchPlace=document.getElementById("searchBar");
    searchPlace.addEventListener("search",()=>{
        query=searchPlace.value;
        getData(query);
        searchPlace.value="";
    })
    
}

function populateData(data){

    let listOfData = document.getElementById("list");
    listOfData.appendChild(document.createElement("li"));
    listOfData.textContent=data.current.temp_c+" "+data.current.condition.text;


}
