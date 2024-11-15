const logoText = document.querySelector(".logo-text");
const recipeArticle = document.querySelector(".description-container");
const timeContainer = document.querySelector(".time-container");
const timeEst = document.querySelector(".time");
const recipeImg = document.querySelector("img");
const ingridientsContainer = document.querySelector(".ingredients-container");
const instructionContainer = document.querySelector(".instructions-container");
const instructionsList = document.querySelector(".instructions-list");

logoText.style.color = "#384241";
logoText.parentElement.style.justifyContent = "flex-start";
logoText.parentElement.style.borderBottom = "1px solid lightgray";
recipeArticle.firstElementChild.innerText = "Frozen Cheescake";
timeContainer.firstElementChild.classList.add("material-icons");
timeEst.innerText = `60+ min`;
recipeImg.src = "assets/frozen-cheesecake-slice.jpg";
ingridientsContainer.style.backgroundColor = "#f9f9f9";

const updatedList = `
    <li>15st digistivetex</li>
    <li>Lite smör</li>
`;
ingridientsContainer.children[2].firstElementChild.remove();
ingridientsContainer.children[2].insertAdjacentHTML("afterbegin", updatedList);

ingridientsContainer.children[4].children[2].innerText = "3tsk vaniljsocker";
ingridientsContainer.children[4].children[3].insertAdjacentHTML(
  "afterend",
  "<li>400g naturell philadelphiaost</li>"
);

instructionContainer.firstElementChild.classList.remove("shadow");

instructionsList.children[1].textContent =
  "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";

instructionsList.children[8].textContent = "Ställ in i frysen över natten.";



// Störde mig på att bilden vart utdragen så va tvungen att fixa till det :P 

recipeImg.style.objectFit = 'cover'