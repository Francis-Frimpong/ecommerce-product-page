let overviewList = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
]

const overviewImg = document.querySelector('.shoe-img');
const lightBoxImg = document.querySelector('.lightbox-img')

overviewImg.src = overviewList[0];
lightBoxImg.src = overviewList[0];

const thumbnails = document.querySelectorAll('.thumbnail')
const lightboxThumbNails = document.querySelectorAll('.lightbox-thumbnail')

const shoesImgThumbnails = document.querySelector('.shoes-img-thumbnails')
const shoeImg = document.querySelector('.shoe-img');
const closeOverlay = document.querySelector('.close-icon')



//linking thumbnail image to product image
function linkThumbnailToProductImg(e){
    if(e.target.classList.contains('thumbnail')){
        thumbnails.forEach((thumbnail, index) => {
            if(e.target == thumbnail){
                thumbnail.classList.add('active-thumbnail');
                overviewImg.src = overviewList[index];
                lightBoxImg.src = overviewList[index];
              

            }else{
                thumbnail.classList.remove('active-thumbnail');


            }
        })
    
    }
    linkOverviewImgToThumbnail()

}  



function openLightBox(){
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.lightbox').style.display = 'block';
    linkOverviewImgToThumbnail()
    
    
}

function closeLightBox(){
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.lightbox').style.display = 'none';
    
}


let counter = 0;

function nextLightBoxImg(){
    counter++;
    
    if(counter >= overviewList.length){
        counter = 0;
    }
    lightBoxImg.src = overviewList[counter];
    linkOverviewImgToThumbnail()

}

function previousLightBoxImg(){
    counter--;
    if(counter < 0){
        counter = 0;
    }
    lightBoxImg.src = overviewList[counter];
    linkOverviewImgToThumbnail()

}



function linkOverviewImgToThumbnail() {

    lightboxThumbNails.forEach((lightboxThumbNail, index) => {
        overviewList[index];
        if(index === counter){
            lightboxThumbNail.classList.add('active-thumbnail');
        }else{
            lightboxThumbNail.classList.remove('active-thumbnail');
    
        }
    
    })
}

linkOverviewImgToThumbnail()




shoesImgThumbnails.addEventListener('click', linkThumbnailToProductImg);

shoeImg.addEventListener('click', openLightBox);

closeOverlay.addEventListener('click', closeLightBox);

document.querySelector('.next-icon').addEventListener('click', nextLightBoxImg);

document.querySelector('.previous-icon').addEventListener('click', previousLightBoxImg);


