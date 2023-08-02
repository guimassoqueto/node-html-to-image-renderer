import { ProductModel } from "../../domain/models/product-model.js";

export class FofinhoTemplater {
  static generate (product: ProductModel): string {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Promo Thunder</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Carter+One&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Public+Sans:wght@900&display=swap" rel="stylesheet">
      <link href="https://fonts.cdnfonts.com/css/heatrix" rel="stylesheet">
      <style>
        .background_container {
          background-image: url("https://raw.githubusercontent.com/guimassoqueto/logos/main/background.png");
          background-size:cover; /* Adjust this property as needed */
          background-position: center center; /* Adjust this property as needed */
          height: 100vh !important;
          width: 100vw !important; 
          position: relative; /* To position the overlay correctly */
          z-index: 10;
          background-color: #e3e3e3;
        }
        
        .container {
          font-family: 'Carter One', cursive;
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
          padding-top: 4em;
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
          position: relative;
        }
        .container_image img{
          height: 35vh;
        }
    
        .container_image--fomo {
          position: absolute; 
          top: 50%; 
          left: 50%;
          transform: translate(-50%, 290%);
          background-color: red;
          padding: 20px;
          width:max-content;
          border-radius: 1em;
          display: none;
        }
        #fomoMessage {
          font-family: 'Public Sans', sans-serif;
          color: white;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 2em;
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
          justify-content: center;
          align-items: center;
        }
    
        .container_button-img img {
          margin-top: 1.5em;
          height: 20em;
        }
    
        .container_button-button {
          border: 0.4em solid #000;
          background-color: #fff;
          border-radius: 1em;
          height: 10em;
          width: calc(60vw + 5em);
          position: relative;
          right: 5em;
          z-index: -99;
        }
    
        .container_message {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
    
        .container_message h1 {
          text-align: center;
          font-family: 'Heatrix', sans-serif;
          font-size: 4em;
          text-transform: uppercase;
        }
    
      </style>
    </head>
    <body>
      <div class="background_container">
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
            <div class="container_image--fomo">
              <span id="fomoMessage"></span>
            </div>
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
              <img src="https://raw.githubusercontent.com/guimassoqueto/logos/main/fofinho.png" alt="">
            </div>
            <div class="container_button-button"></div>
          </div>
          <div class="container_message">
            <h1>As melhores ofertas você encontra aqui!</h1>
          </div>
        </div>
        <script>
          const title = "${product.title}";
          const imageUrl = "${product.image_url}";
          const previousPrice = "${product.previous_price}";
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
          const fomoMessageElement = document.getElementById("fomoMessage");
    
          if (!freeShipping) infoShippingElement.style.display = "none";
          if (!installments) infoInstallmentsElement.style.display = "none";
    
          const randomFomo = ["Aproveite agora, oferta incrível!", "Desconto incrível!", "Preço baixo, aproveite!", "Desconto relâmpago, não perca!", "Oferta única, aproveite!", "Preço imperdível!", "Desconto especial, aproveite!", "Aproveite, oferta limitada!", "Desconto surpresa, compre já!", "Oferta imperdível, aproveite!", "Desconto relâmpago!"]
          if (parseFloat(discount) >= 25) {
            document.querySelector(".container_image--fomo").style.display = "block";
            fomoMessageElement.innerText = randomFomo[Math.floor(Math.random() * randomFomo.length)]
          } 
    
          titleElement.innerText = title;
          imageElement.setAttribute("src", imageUrl);
          priceOldElement.innerText = previousPrice;
          priceNewElement.innerText = price;
          priceDiscountElement.innerText =  discount && "-" + discount.toString() + "%";
        </script>
      </div>
    </body>
    </html>
    `;
  }
}