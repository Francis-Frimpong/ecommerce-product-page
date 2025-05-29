let overviewList = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];

const [product1] = overviewList;

let cartList = [];

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

// Event listeners for various events

addBtn.addEventListener("click", () => {
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

  cartList.push(productDetail);

  cartList.forEach((product) => {
    document.querySelector(".display-cart-product").innerHTML = product;
    document.querySelector(".cart-notification").style.display = "block";
    notificationCounter.textContent = countproduct;
  });

  //if cartList is empty display message else don't display messege
  if (cartList.length > 0) {
    document.querySelector(".empty-sign").style.display = "none";
  } else {
    document.querySelector(".empty-sign").style.display = "block";
  }
});
counterBtn.addEventListener("click", productCounter);

shoesImgThumbnails.addEventListener("click", linkThumbnailToProductImg);

shoeImg.addEventListener("click", openLightBox);

closeOverlay.addEventListener("click", closeLightBox);

document.querySelector(".next-icon").addEventListener("click", nextLightBoxImg);

document
  .querySelector(".previous-icon")
  .addEventListener("click", previousLightBoxImg);
