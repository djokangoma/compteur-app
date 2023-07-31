const buttonRemove=document.getElementById("btn-remove");
const buttonAdd=document.getElementById("btn-add");
const buttonReset=document.getElementById("btn-reset")
const compteur=document.getElementById("compteur");

function compteurAdd(){
    console.log("buttonAdd");
    const nombre=Number(compteur.innerHTML);
    compteur.innerHTML=`${nombre + 1}`

}

function compteuremove(){
    const nombre = Number(compteur.innerHTML);
    if(nombre<0)
    console.log("buttonRemove")
}
function reset(){
    compteur.innerHTML = Number(0);
}

buttonAdd.addEventListener("click",compteurAdd);
buttonRemove.addEventListener("click",compteuremove);

buttonReset.addEventListenert('click', reset);