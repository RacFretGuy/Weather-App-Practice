const apiKey="f4db925a3d6842e5a0775307252703";
let query="Jaipur"; 


fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    console.log(data.current.temp_c);
    populateData(data); 
})
.catch((error)=>{
    console.log(error);
})


function suggestions(){

}

function search(){
    
}

function populateData(data){
    
}
