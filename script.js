let icon = document.querySelector('nav i')

let menu = document.querySelector('.menu');
let flage = 0

icon.addEventListener('click',()=>{

    if(flage==0){
        menu.classList.add('active');
flage= 1
    }else{

        menu.classList.remove('active')
        flage=0;
    }

    



})