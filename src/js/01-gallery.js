// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
console.log(SimpleLightbox);
import "simplelightbox/dist/simple-lightbox.min.css";


const items = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join(" ");

const galleryList = document.querySelector(".gallery");
const options = {
    captionsData: "alt",
    captionsDelay: 250
}

galleryList.insertAdjacentHTML('beforeend', items);


 new SimpleLightbox('.gallery a', options);
