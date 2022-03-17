
// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');
let order = document.querySelector('.header__block-order');



burger.addEventListener('click', rotateBurger); 
burger.addEventListener('click', orderMix); 

function rotateBurger() {
  
  burger.classList.toggle('burger-active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

}

function orderMix() {
  if (order.style.display === "block") {
    order.style.display = "none";
  } else {
    order.style.display = "block";
  }
}
