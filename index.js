var addCart = document.querySelector('#btn');
var toQuantity = document.querySelector('#tquantity');
var cartDis = document.querySelector('#cdisplay');

var price = document.querySelector('#price');
pRices = 90.89;

toQuantity.addEventListener('click', function(){
    pRices++;
    price.textContent = pRices;
});

addCart.addEventListener('click', function(){
    cartDis.textContent = toQuantity.value
    alert('Item added to cart')
});

// prDisplay.addEventListener('click', function(){
//     // prDisplay = itDisplay.value
//     console.log("hdh")
// });

function changeImage(event){
    document.querySelector('.cart').src = event.children[0].src
}

var frameColor = document.querySelector('.cart1');
var fraColor = document.querySelector('#blcolor');
var broColor = document.querySelector('#brcolor');
var goColor = document.querySelector('#gcolor');
var grColor = document.querySelector('#grcolor');

fraColor.addEventListener('mouseover', function(){
    frameColor.style.background = 'black'
});

broColor.addEventListener('mouseover', function(){
    frameColor.style.background = 'brown'
});

goColor.addEventListener('mouseover', function(){
    frameColor.style.background = 'goldenrod'
});

grColor.addEventListener('mouseover', function(){
    frameColor.style.background = 'pink'
});