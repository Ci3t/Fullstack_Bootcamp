

let image_slide = document.querySelector('.img-slide');
let images = ['1.jpg','2.jpg','3.jpg','4.jpg'];
let i = 0; //current index 

function prev(){
    if(i <= 0) i=images.length;
    i--;
    return setImg();
}
function next(){
    if (i >= images.length-1) i = -1;
    i++;
    return setImg();
}


function setImg(){
    return image_slide.setAttribute('src','assets/images/'+images[i]);
}


window.addEventListener('scroll', reveal);
function reveal(){
    let reveals = document.querySelectorAll('.reveal');

    for(let i = 0; i< reveals.length;i++){
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }

}
window.addEventListener('scroll', reveal2);
function reveal2(){
    let reveals2 = document.querySelectorAll('.reveal2');

    for(let i = 0; i< reveals2.length;i++){
        let windowheight2 = window.innerHeight;
        let revealtop2 = reveals2[i].getBoundingClientRect().top;
        let revealpoint2 = 150;

        if (revealtop2 < windowheight2 - revealpoint2){
            reveals2[i].classList.add('active2');
        }else{
            reveals2[i].classList.remove('active2');
        }
    }

}
window.addEventListener('scroll', reveal3);
function reveal3(){
    let reveals3 = document.querySelectorAll('.reveal3');

    for(let i = 0; i< reveals3.length;i++){
        let windowheight3 = window.innerHeight;
        let revealtop3 = reveals2[i].getBoundingClientRect().top;
        let revealpoint3 = 150;

        if (revealtop3 < windowheight3 - revealpoint3){
            reveals3[i].classList.add('active3');
        }else{
            reveals3[i].classList.remove('active3');
        }
    }

}