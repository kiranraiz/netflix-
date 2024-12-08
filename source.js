
let navbar =document.querySelector(".navbar");
let searchbox =document.querySelector(".search-box .fa-search");
// <i class="fa-solid fa-xmark"></i>
searchbox.addEventListener("click",() => {
    navbar.classList.toggle("show-input");
    if(navbar.classList.contains("show-input")){
        searchbox.classList.replace("fa-search","fa-xmark")
    }
    else{
        searchbox.classList.replace("fa-xmark","fa-search")

    }
})


// sidebar open close menu js code 
let menuopenbtn =document.querySelector(".navbar .fa-bars");

let closemenubtn =document.querySelector(".nav-links .fa-xmark");
let navlinks =document.querySelector(".nav-links");


menuopenbtn.addEventListener("click",()=>{
    navlinks.style.left="0";
});
closemenubtn.addEventListener("click",()=>{
    navlinks.style.left="-100%";
});

let  htmlcssarrow = document.querySelector(".html-css-arrow");

htmlcssarrow.addEventListener("click",()=>{

    navlinks.classList.toggle("show1");

});

let  morearrow = document.querySelector(".more-arrow");

morearrow.addEventListener("click",()=>{

    navlinks.classList.toggle("show2");

});
let  javascriptarrow = document.querySelector(".javascript-arrow");

javascriptarrow.addEventListener("click",()=>{

    navlinks.classList.toggle("show3");

});



// alert("hey iam here") MM 





