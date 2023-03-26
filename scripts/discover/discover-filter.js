import { NFTElement } from "./nft.js";
import { nftList } from "./nftList.js";
import { Controller } from "./controller.js";

// The grid of nft cards on display
let grid = document.querySelector(".discover__grid");

// All the NFTs will be stored in the array below as NFTElement objects.
let fullNFTList = [];

// Variable to store current active category index and related html element
let currentIndex = 1;
let currentActiveButtonElement = document.querySelector(`.btn${currentIndex}`);

// Fill up fullNFTList to use in filtering operations
nftList.forEach((obj) => {
  fullNFTList.push(new NFTElement(obj));
});

// Now load up nft cards
for (const nft of fullNFTList) {
  grid.appendChild(Controller.createNFTElement(nft));
}

// Array to hold current displayed nft list to user at any time.
// Specifically defined after fullNFTList is filled up and spread operator is used to prevent pass by reference.
let currentNFTList = [...fullNFTList];

// Selecting all category buttons in left side and assigning related callback function
let categoryButtonList = document.querySelectorAll(
  ".categories__left .categories__cat-btn"
);
categoryButtonList.forEach((elm) => {
  elm.addEventListener("click", onCategorySelect);
});

// Callback function for category buttons
function onCategorySelect() {
  let clickedIndex = parseInt(
    this.classList[this.classList.length - 1].slice(-1)
  );
  let clickedButtonElement = document.querySelector(`.btn${clickedIndex}`);

  // Update category buttons and set currentActiveButtonElement to clickedButtonElement
  currentActiveButtonElement = Controller.updateButtons(
    currentActiveButtonElement,
    clickedButtonElement
  );

  // Update currentNFTList array
  currentNFTList = Controller.filterNFTList(clickedIndex, fullNFTList);

  // Clear grid completely
  Controller.removeAllChildren(grid);

  // Update grid with new currentNFTList
  for (const nft of currentNFTList) {
    grid.appendChild(Controller.createNFTElement(nft));
  }
}
