let overviewList = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

const [product1] = overviewList;

const overviewImg = document.querySelector(".shoe-img");
const lightBoxImg = document.querySelector(".lightbox-img");

const notificationCounter = document.querySelector(".notification-counter");
overviewImg.src = overviewList[0];
lightBoxImg.src = overviewList[0];

const thumbnails = document.querySelectorAll(".thumbnail");
const lightboxThumbNails = document.querySelectorAll(".lightbox-thumbnail");

const shoesImgThumbnails = document.querySelector(".shoes-img-thumbnails");
const shoeImg = document.querySelector(".shoe-img");
const closeOverlay = document.querySelector(".close-icon");

const addBtn = document.querySelector(".add-btn");
const cart = document.querySelector(".cart");
const cartBasket = document.querySelector(".cart-box");
const cartProduct = document.querySelector(".cartProduct");

//linking thumbnail image to product image
function linkThumbnailToProductImg(e) {
  if (e.target.classList.contains("thumbnail")) {
    thumbnails.forEach((thumbnail, index) => {
      if (e.target == thumbnail) {
        thumbnail.classList.add("active-thumbnail");
        overviewImg.src = overviewList[index];
        lightBoxImg.src = overviewList[index];
        counter = index; // ✅ Update counter to match selected image
      } else {
        thumbnail.classList.remove("active-thumbnail");
      }
    });

    linkOverviewImgToThumbnail();
  }
}

function openLightBox() {
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".lightbox").style.display = "block";
}

function closeLightBox() {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".lightbox").style.display = "none";
}

let counter = 0;

function nextLightBoxImg() {
  counter++;

  if (counter >= overviewList.length) {
    counter = 0;
  }
  lightBoxImg.src = overviewList[counter];
  linkOverviewImgToThumbnail();
}

function previousLightBoxImg() {
  counter--;
  if (counter < 0) {
    counter = overviewList.length - 1;
  }
  lightBoxImg.src = overviewList[counter];
  linkOverviewImgToThumbnail();
}

function linkOverviewImgToThumbnail() {
  lightboxThumbNails.forEach((lightboxThumbNail, index) => {
    if (lightBoxImg.src.endsWith(overviewList[index])) {
      lightboxThumbNail.classList.add("active-thumbnail");
    } else {
      lightboxThumbNail.classList.remove("active-thumbnail");
    }
  });
}

linkOverviewImgToThumbnail();

// Pouduct counter functionality
let countproduct = 0;
const numCounter = document.querySelector(".num-counter");
const counterBtn = document.querySelector(".counter-btn");

numCounter.textContent = countproduct;

function productCounter(e) {
  if (e.target.classList.contains("plus")) {
    countproduct++;
    numCounter.textContent = countproduct;
  } else {
    if (countproduct > 0) {
      countproduct--;
      numCounter.textContent = countproduct;
    }
  }
}

// Delete product from cart
function deleteCartProduct(cartProduct, e) {
  if (e.target.classList.contains("delete-btn")) {
    cartProduct.remove();
    countproduct = 0;
    numCounter.textContent = countproduct;

    notificationCounter.style.display = "none";
    notificationCounter.textContent = countproduct;
    document.querySelector(".checkout").style.display = "none";
    document.querySelector(".empty-sign").style.display = "flex";
  }
}

// Add product to cart function
function addProductTocart() {
  //don't add product to cart if counter equals 0
  if (countproduct === 0) {
    return;
  }

  let calProductPrice = 125.0 * countproduct;
  const productDetail = `
     <div class="cartProduct">
      <img
        src="${product1}"
        alt=""
        class="selected-product-img"
      />
      <div class="cartProduct-txt">
        <h5>Fall Limited Edition Sneakers</h5>
        <h5>$125.00 x ${countproduct} <span>$${calProductPrice}.00</span></h5>
      </div>
      <img src="images/icon-delete.svg" alt="delete" class="delete-btn" />
    </div>
  `;

  document.querySelector(".checkout").style.display = "block";

  const displayCartProd = (document.querySelector(
    ".display-cart-product"
  ).innerHTML = productDetail);

  // Assigning the cartProduct html element to the cartProduct variable
  const cartProduct = document.querySelector(".cartProduct");

  //adding eventListener to the cartProduct to create the delete functionaliy
  cartProduct.addEventListener("click", (e) => {
    deleteCartProduct(cartProduct, e);
  });

  notificationCounter.style.display = "block";
  notificationCounter.textContent = countproduct;

  //if displayCartProd is empty display message else don't display messege
  if (displayCartProd.textContent !== "") {
    document.querySelector(".empty-sign").style.display = "none";
  }
}

// display and close cart basket
function displayAndCloseCartBasket() {
  cartBasket.classList.toggle("display-cartBasket");
}

// Event listeners for various events

cart.addEventListener("click", displayAndCloseCartBasket);

addBtn.addEventListener("click", addProductTocart);

counterBtn.addEventListener("click", productCounter);

shoesImgThumbnails.addEventListener("click", linkThumbnailToProductImg);

shoeImg.addEventListener("click", openLightBox);

closeOverlay.addEventListener("click", closeLightBox);

document.querySelector(".next-icon").addEventListener("click", nextLightBoxImg);

document
  .querySelector(".previous-icon")
  .addEventListener("click", previousLightBoxImg);
