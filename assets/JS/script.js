const menuTitle = document.querySelector(".content__navbar-menu");
menuTitle.addEventListener("click",function(x){
    if(x.target.classList.contains("content__navbar-item")){
        const Target = x.target.getAttribute("data-title");
        menuTitle.querySelector(".active").classList.remove("active");
        x.target.classList.add("active");

        const menuItem = document.querySelector(".content");
        menuItem.querySelector(".container__tab.active").classList.remove("active");
        menuItem.querySelector(Target).classList.add("active")

    }
})

let image = document.getElementById('slide__auto');
let images = ['./assets/image/listSong1/song16.jpg','./assets/image/listSong1/song17.jpg','./assets/image/listSong1/song18.jpg','./assets/image/listSong1/song19.jpg','./assets/image/listSong1/song10.jpg','./assets/image/listSong1/song1.jpg','./assets/image/listSong1/song2.jpg'];
setInterval(function() {
    let random = Math.floor(Math.random()*4);
    image.src = images[random]; 
},1500)