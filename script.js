let heading=document.querySelector(".heading");

let count = 0;

function typeJS(){
    
    count++
  
    heading.innerHTML = `${count}+`;
    if(count == 1){
        heading.style .color ="red"
      
    } else if (count == 2){
        heading.style .color ="blue"
    }else if(count == 3){
        heading.style .color ="green"
        
    }else if(count == 4){
        heading.style .color ="tomato"
    }else if (count ==5){
       
        heading.style .color ="maroon"
        clearInterval(stop)
    } 
}

let stop = setInterval(()=>{
    typeJS();
},heading.dataset.speed)

  
let counterCount = document.querySelectorAll(".counterCount");
 let CNVcounter =Array.from(counterCount);
 console.log(CNVcounter);

 CNVcounter.map(item=>{
    let count = 0;
    function counterJS(){
        count++
        item.innerHTML=count;
        if(count == item.dataset.number){
            clearInterval(stop1)
        }
    }
    let stop1 = setInterval(()=>{
        counterJS();
    },item.dataset.speed)

 })










let typeAni = document.querySelector(".typeAni");   

let Tycount=0
function typeJs(){
  
    typeAni.innerHTML +=typeAni.dataset.text.charAt(Tycount);
    Tycount ++;
  
    if(Tycount == typeAni.dataset.text.length + 1){
        typeAni.innerHTML="";
        Tycount =0
    }
}
let stop3 =setInterval(()=>{
    typeJs()
},800)


