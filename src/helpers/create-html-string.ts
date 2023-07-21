import { Product } from "../types/product.js";

export function createHTMLString(product: Product): string {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Promo Thunder</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"> 
  <style>
    * {
      font-family: "Open Sans", sans-serif;
    }
    .container {
      display: flex;
      flex-direction: column;
      justify-content:space-evenly;
      height: 100vh;
      margin-right: 3em;
      margin-left: 3em;
    }
    .container_header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 4em;
    }
    .container_header-logo img {
      height: 5em;
    }
    .container_title {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .container_title h1{
      font-size: 2.4em;
      color: #000;
      font-weight: 500;
    }
    .container_image {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .container_image img{
      height: 40vh;
    }
    .container_rating {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .container_rating img {
      height: 2.5em;
    }
    .container_info {
      display: flex;
      flex-direction: column;  
      justify-content: center;
      align-items: center;
      font-size: 2em;
    }

    .container_price {
      display: flex;
      flex-direction: row;  
      justify-content:space-between;   
      align-items: center;
      margin-left: 3em;
      margin-right: 3em;
    }
    .container_price-price {
      font-size: 2.75em;
    }
    .container_price-discount {
      font-size: 4em;
      font-weight: 600;
    }
    .container_price-price--old{
      color: #777;
      text-decoration: solid line-through #777 4px;
    }
    .container_button {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .container_button-img img {
      margin-top: 1.5em;
      height: 8em;
    }

    .container_button-button {
      border: 0.4em solid #000;
      border-radius: 1em;
      height: 10em;
      width: 60vw;
      margin-bottom: 4em;
    }

  </style>
</head>
<body>
  <div class="container">
    <div class="container_header">
      <div class="container_header-logo">
        <!--<img src="https://vetores.org/d/magalu.svg">-->
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg">
      </div>
    </div>
    <div class="container_title">
      <h1 id="title"></h1>
    </div>
    <div class="container_image">
      <img id="image">
    </div>
    <div class="container_info">
      <div class="container_info-shipping" id="infoShipping">
        <span>Frete Grátis com Amazon Prime</span>
      </div>
      <div class="container_info-installments" id="infoInstallments">
        <span>Parcele sem juros</span>
      </div>
    </div>
    <div class="container_price">
      <div class="container_price-price">
        <div class="container_price-price--old">
            <span>R$</span>
            <span id="priceOld"></span>
        </div>
        <div class="container_price-price--new">
            <span>R$</span>
            <span id="priceNew"></span>
        </div>
      </div>
      <div class="container_price-discount">
        <span id="priceDiscount"></span>
      </div>
    </div>
    <div class="container_button">
      <div class="container_button-img">
        <img src="https://raw.githubusercontent.com/guimassoqueto/logos/da22a5334a130498005a1427825baff7f72de371/flash-thunder-svgrepo-com.svg" alt="">
      </div>
      <div class="container_button-button"></div>
      <div class="container_button-img">
        <img src="https://raw.githubusercontent.com/guimassoqueto/logos/da22a5334a130498005a1427825baff7f72de371/flash-thunder-svgrepo-com.svg" alt="">
      </div>
    </div>
  </div>
  <script>
    const title = "${product.title}";
    const image_url = "${product.image_url}";
    const previous_price = "${product.previous_price}";
    const price = "${product.price}";
    const discount = "${product.discount}";
    const installments = ${parseFloat(product.price) > 100};
    const freeShipping = ${product.free_shipping};  
    
    const titleElement = document.getElementById("title");
    const imageElement = document.getElementById("image");
    const infoShippingElement = document.getElementById("infoShipping");
    const infoInstallmentsElement =  document.getElementById("infoInstallments");
    const priceOldElement = document.getElementById("priceOld");
    const priceNewElement = document.getElementById("priceNew");
    const priceDiscountElement = document.getElementById("priceDiscount");

    if (!freeShipping) infoShippingElement.style.display = "none";
    if (!installments) infoInstallmentsElement.style.display = "none";
    
    titleElement.innerText = title;
    imageElement.setAttribute("src", image_url);
    priceOldElement.innerText = previous_price;
    priceNewElement.innerText = price;
    priceDiscountElement.innerText = "-" + discount + "%";
  </script>
</body>
</html>
  `;
}