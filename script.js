let container= document.getElementById("container");
let leftButton= document.getElementById("leftButton");
let rightButton=document.getElementById("rightButton");

//au chargement de la page
document.body.onload=function(){
    nbr=6;
    p=0;                                        //init position à 0
    container.style.width= (1024*nbr)+"px";     //on crée le container d'une largeur 1024 x nb de photos
    leftButton.style.visibility="hidden";       //au départ le bouton G est caché

    //on crée une div, enfant de container,  dans laquelle s'affichent les photos
    for (i=1; i<=nbr; i++){
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage= "url(/img/image"+i+".jpeg)";
        container.appendChild(div);
    };
};


//au click sur le bouton de D le container translate de la largeur de n  photo 
rightButton.onclick=function(){
    if (p>-nbr+1)
    p--;
    container.style.transform="translate("+p*1024+"px)";
    container.style.transition="all 0.5s ease";
    visibleHidden();
    };
    
//au click sur le bouton de G le container translate de la largeur de n  photo 
leftButton.onclick=function(){
    if (p<=0)
    p++;
    container.style.transform="translate("+p*1024+"px)";
    container.style.transition="all 0.5s ease";
    visibleHidden();
};


//fonction qui cache les buttons lorsque l'on arrive au bout du carrousel
function visibleHidden(){
    if(p==-nbr+1)
        rightButton.style.visibility="hidden";
    else
        rightButton.style.visibility="visible";
    if(p==0)
        leftButton.style.visibility="hidden";
    else
        leftButton.style.visibility="visible";
};