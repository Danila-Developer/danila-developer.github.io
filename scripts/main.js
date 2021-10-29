let popap = document.querySelector('.popap');
let buttons = document.querySelectorAll('.service__button');
buttons.forEach((item)=>{
   item.addEventListener('click', ()=>{
      popap.classList.add('active');
   });
});

let close = document.querySelector('.close');
close.addEventListener('click', ()=>{
   popap.classList.remove('active');
});
$('.slider').slick();
