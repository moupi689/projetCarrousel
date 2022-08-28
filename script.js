//on récupère les éléments dont on aura besoin
let container= document.getElementsByClassName('carrousel__container');
let leftButton= document.getElementsByClassName('button--left');
let rightButton=document.getElementsByClassName('button--right');

//au chargement de la page
document.body.onload=function(){
    nbr=6;
    p=0;                                            //init position à 0
    container[0].style.width= (1024 * nbr) + "px";     //on crée le container d'une largeur 1024 x nb de photos
    leftButton[0].style.visibility= "hidden";          //au départ le bouton G est caché

    //on crée une div, enfant de container,  dans laquelle s'affichent les photos
    for (i=1; i<=nbr; i++){
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage= "url(./img/image"+i+".jpeg)";
        container[0].appendChild(div);
    };
};


//au click sur le bouton de D le container translate de la largeur de n  photo 
rightButton[0].onclick=function(){
    if (p>-nbr+1)
    p--;
    container[0].style.transform="translate("+p*1024+"px)";
    container[0].style.transition="all 0.5s ease";
    visibleHidden();
    };
    
//au click sur le bouton de G le container translate de la largeur de n  photo 
leftButton[0].onclick=function(){
    if (p<=0)
    p++;
    container[0].style.transform="translate("+p*1024+"px)";
    container[0].style.transition="all 0.5s ease";
    visibleHidden();
};


//fonction qui cache les buttons lorsque l'on arrive au bout du carrousel
function visibleHidden(){
    if(p==-nbr+1)
        rightButton[0].style.visibility="hidden";
    else
        rightButton[0].style.visibility="visible";
    if(p==0)
        leftButton[0].style.visibility="hidden";
    else
        leftButton[0].style.visibility="visible";
};