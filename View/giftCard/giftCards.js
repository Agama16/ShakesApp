const grid = document.querySelectorAll(".grid .wrapper-grid .image"),
orderBox = document.querySelector(".order-box"),
closeIcon = document.querySelector(".close-button"),
shadowBackground = document.querySelector(".shadow")

window.onload = () => {

    for(let i = 0; i < grid.length; i++)
    {
        grid[i].onclick = () => {
            console.log(i);
            orderBox.classList.add("show");
            shadowBackground.style.display = "block";

            closeIcon.onclick = () => {
                orderBox.classList.remove("show");
                shadowBackground.style.display = "none";
            }
        }
    }

}


// This is the JavaScript code that generates the gift cards

const giftCards = [];

// Array of image filenames in the folder
const imageFilenames = ["../imgs/1.png", "../imgs/2.png", "../imgs/3.png", "../imgs/4.png", "../imgs/5.png", "../imgs/6.png", "../imgs/7.png"];

// Generate random gift cards
for (let i = 1; i <= 5; i++) {
  const name = `Gift Card ${i}`;
  const price = Math.floor(Math.random() * 100) + 1; // Random price between 1 and 100
  const image = `../img/${imageFilenames[Math.floor(Math.random() * imageFilenames.length)]}`; // Random image URL from the folder

  const giftCard = { name, price, image };
  giftCards.push(giftCard);
}