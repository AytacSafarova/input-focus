let collaj = document.querySelectorAll("input")

collaj.forEach(element => {
   element.addEventListener('keyup',()=>{
    if(element.value){
        console.log(element.nextSibling)
        element.nextSibling.innerHTML=element.value
    }
    else{
        console.log(false)
    }
   })
});


//onfocus for all input 
function func(){
    
}