
function triggershow(names,tags){
    document.getElementsByClassName(tags)[0].style.display="none"

    if(document.getElementById(names).style.display=="none"){
        document.getElementById(names).style.display="inline"
    }else{
        document.getElementById(names).style.display="none"
    }
}

function triggershowabout(){
    if(document.getElementById("about").style.display=="none"){
        document.getElementById("about").style.display="inline";
        document.getElementById("works").style.display="none";
        document.getElementById("port").style.display="none";
    }else{
        document.getElementById("about").style.display="none";
    }
}
function triggershowwork(){
    if(document.getElementById("works").style.display=="none"){
        document.getElementById("works").style.display="inline";
        document.getElementById("about").style.display="none";
        document.getElementById("port").style.display="none";
    }else{
        document.getElementById("works").style.display="none";
    }
}
function triggershowport(){
    if(document.getElementById("port").style.display=="none"){
        document.getElementById("port").style.display="inline";
        document.getElementById("about").style.display="none";
        document.getElementById("works").style.display="none";
    }else{
        document.getElementById("port").style.display="none";
    }
}