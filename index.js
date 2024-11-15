// Globals
const recipeName = document.getElementById("recipe-name");
const descContent = document.querySelector(".description");
const descFontsize = window.getComputedStyle(descContent).fontSize;
const imageContainer = document.querySelector(".image-container");
const image = imageContainer.firstElementChild;
const pasteList = document.querySelector(".ingredients-list-paste");
const ingredientsList = document.querySelector(".instructions-list");

const imgWidth = image.naturalWidth;
const imgHeight = image.naturalHeight;
const imgSrc = image.src;

const urlImage = {
  url: imgSrc,
  height: imgHeight,
  width: imgWidth,
};

console.log(`The name of the recipe is: "${recipeName.textContent}"`);

console.log(
  `The tag used for the recipe name is a "${recipeName.nodeName}" tag`
);

console.log(`Font size used for the description p tag is: ${descFontsize}`);

console.log(`Value of the alt attribute on the image is: "${image.alt}"`);

console.log(`{
    url: ${urlImage.url},
    height: ${urlImage.height},
    width: ${urlImage.width},
}
`);

console.log(`The paste has "${pasteList.children.length}" ingredients`);

console.log(
  `The fourth ingridient in the paste list is: "${pasteList.children[3].textContent}"`
);

const instructionsArray = Array.from(ingredientsList.children).map(
  (li, index) => ({
    order: index,
    text: li.textContent.trim(),
  })
);

console.log(instructionsArray);



