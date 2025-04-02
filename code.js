const apiKey="f4db925a3d6842e5a0775307252703";
const url="http://api.weatherapi.com/v1/current.json?key=";
const searchUrl="http://api.weatherapi.com/v1/search.json?key=";
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

function search(){
    let searchPlace=document.getElementById("searchBar");
    let delayType;

    
        searchPlace.addEventListener("search",()=>{
            query=searchPlace.value;
            getData(query);
            searchPlace.value="";
        })
    
   
    searchPlace.addEventListener("input",()=>{
        clearTimeout(delayType);
        delayType=setTimeout(()=>{
           autoComplete(searchPlace.value);
        },400);
       
        
    })


}

function autoComplete(cityName){
   let dataList=document.getElementById("suggestions");
   let options=[];
  dataList.innerHTML="";
   if(cityName!="" && cityName.length>=3){
    fetch(`${searchUrl}${apiKey}&q=`+cityName)
    .then((response)=>{
       return response.json();
    })
    .then((data)=>{
       for(let i=0;i<data.length;i++){
        console.log(data[i].name);
        let option=dataList.appendChild(document.createElement("option"));
        option.value=data[i].name;
        
        
       }
    })
    .catch((error)=>{
        console.log(error);
        
    })
   }   

}
function populateData(data){

    let listOfData = document.getElementById("list");
    listOfData.appendChild(document.createElement("li"));
    listOfData.textContent=data.current.temp_c+" "+data.current.condition.text;


}
