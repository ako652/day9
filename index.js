window.onload=function(){
AddingNewCells()

}





    const AddingNewCells= function(){

    let IdContainer=document.getElementById("container")
    IdContainer.innerHTML=""
    
    for (let i=1;i<=76; i++){

        let newdiv=document.createElement("div")
        newdiv.innerText=i
        newdiv.classList.add("cells")
    
    IdContainer.appendChild(newdiv)
        
       }
    }
