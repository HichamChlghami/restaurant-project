let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');


menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('a');

}
windows.onscroll=()=>{
    menu.classList.remove(' fa-times');
    navbar.classList.remove('a');

}