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
        newdiv.onclick = makeItClickable()
    IdContainer.appendChild(newdiv)
        
    }

}


function makeItClickable() {
    let myColors = ['red', 'purple', '#E84751', 'blue', 'orange', '#323643'];
    document.querySelector("button").addEventListener('click', function(){
      for(i = 0; i < myColors.length; i++) {
        this .style.color = myColors[i];
      }
    });
  }
    