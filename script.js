let display=document.getElementById("display");
let result=document.getElementById("presult")

function appendnumb(x){
    display.value+=x;
}
function equal(){
    try{
    result.innerHTML=eval(display.value)
    }
    catch{
        result.innerHTML="error"
    }
}

function cleartodisplay(){
    display.value='';
    result.innerHTML=0;
}


function slicetodisplay(){
    display.value=display.value.slice(0,-1);
}