// GET UI 

const getcontainer = document.querySelector('.container');
const getbtnright = document.querySelector('.btn-right');
const getbtnleft = document.querySelector('.btn-left');
const getshowimgone = document.querySelector('.showimgone');
const getshowimgtwo = document.querySelector('.showimgtwo');
const getshowimgthree = document.querySelector('.showimgthree');
const gettitle = document.getElementById('imgname');
const gettext = document.getElementById('showtexts');




let textes = ["Become Master of the Galaxy! Create and customize your team using characters from every era.","Including champions from The Mandalorian,Star Wars:The Rise of Sky walker, and StarWars.","Defeat Opponents and rise to the top as you dominate the galactic hologames in a far-off cantina."];
let titiles = ["Star War","War","65"];



// one 
let idx = 0;
let shownames = ["one","two","three"];

loadimages(shownames[idx]);
// console.log(loadimgaes(shownames[idx]));

function loadimages(slides){
    getshowimgone.children[0].src = `./libs/imgs/${slides}.jpg`;
    gettitle.innerText = titiles[idx];
    gettext.textContent = textes[idx];
}




//two
let idxtwo = 1;
let shownametwo = ["one","two","three"];
loadimagestwo(shownametwo[idxtwo]);

function loadimagestwo(showtwo){
    getshowimgtwo.children[0].src = `./libs/imgs/${showtwo}.jpg`;

}



//three
let idxthree = 2;
let shownamethree= ["one","two","three"];
loadimagethree(shownamethree[idxthree]);

function loadimagethree(shothree){
    getshowimgthree.children[0].src = `./libs/imgs/${shothree}.jpg`;

}




getbtnleft.addEventListener('click',function(){
    // console.log('hay');
    idx--;
    idxtwo--;
    idxthree--;

    if(idx < 0){
        idx = shownames.length-1;
    }


    if(idxtwo < 0){
        idxtwo = shownametwo.length-1;
    }

    if(idxthree < 0){
        idxthree = shownamethree.length-1;
    }

    loadimages(shownames[idx]);
    loadimagestwo(shownametwo[idxtwo]);
    loadimagethree(shownametwo[idxthree]);
});




getbtnright.addEventListener('click',function(){
    // console.log('hay');
    idx++;
    idxtwo++;
    idxthree++;

    if(idx > shownames.length-1){

        idx = 0;
        
    }


    if(idxtwo > shownames.length-1){

        idxtwo = 0;
        
    }


    if(idxthree > shownames.length-1){

        idxthree = 0;
        
    }

    loadimages(shownames[idx]);
    loadimagestwo(shownametwo[idxtwo]);
    loadimagethree(shownamethree[idxthree]);
    
});