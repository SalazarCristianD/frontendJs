const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCardContainer =fdocument.querySelector('#shoppingCartContainer');

const cardContainer = document.querySelector('.cards-container')

menuCarritoIcon.addEventListener("click", toggleCarritoshoppingCardContainer);

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);


function toggleCarritoshoppingCardContainer(){



    mobileMenu.classList.add('inactive');
    shoppingCardContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive')

    
}

function toggleDesktopMenu(){
   /*
    código de la clase 

   const isshoppingCardContainerClosed = shoppingCardContainer.classList.contains('inactive');
   if(!isshoppingCardContainerClosed){
    shoppingCardContainer.classList.add('inactive')
   }

   desktopMenu.classList.toggle('inactive')
   */

    mobileMenu.classList.add('inactive');
    shoppingCardContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive')

}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCardContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive')

}

const productLst = [];
productLst.push({
    name: "bike",
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},{
    name: "Guitar: Fender telecaster",
    price: 560,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productLst.push({
    name: "bass",
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
      
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
        cardContainer.appendChild(productCard);

}
}
renderProducts(productLst)