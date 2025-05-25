let overviewList = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
]

const overviewImg = document.querySelector('.shoe-img');
overviewImg.src = overviewList[0];
const thumbnails = document.querySelectorAll('.thumbnail')
const shoesImgThumbnails = document.querySelector('.shoes-img-thumbnails')
const shoeImg = document.querySelector('.shoe-img');
const closeOverlay = document.querySelector('.close-icon')

//linking thumbnail image to product image
function linkThumbnailToProductImg(e){
     if(e.target.classList.contains('thumbnail')){
        thumbnails.forEach((thumbnail, index) => {
            if(e.target == thumbnail){
                thumbnail.classList.add('active-thumbnail')
                overviewImg.src = overviewList[index]
            }else{
                thumbnail.classList.remove('active-thumbnail')

            }
        })
    
    }
}  

function openLightBox(){
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.lightbox').style.display = 'block';

}

function closeLightBox(){
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.lightbox').style.display = 'none';

}



shoesImgThumbnails.addEventListener('click', linkThumbnailToProductImg);
shoeImg.addEventListener('click', openLightBox);
closeOverlay.addEventListener('click', closeLightBox);


