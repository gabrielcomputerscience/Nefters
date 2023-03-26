export class Controller {
  // Updates the button visuals
  static updateButtons(oldButtonelement, newButtonElement) {
    oldButtonelement.classList.remove("a-cat");
    newButtonElement.classList.add("a-cat");
    return newButtonElement;
  }

  // Filters the fullList of NFTs according to current selection and returns it.
  static filterNFTList(clickedIndex, fullList) {
    if (clickedIndex === 1) {
      return fullList;
    } else {
      return fullList.filter((nft) => {
        // Below object is used instead of a switch-case.
        let filteringObject = {
          2: "Art",
          3: "Celebrities",
          4: "Gaming",
          5: "Sport",
          6: "Music",
          7: "Crypto",
        };

        return nft["category"] === filteringObject[clickedIndex];
      });
    }
  }

  // This function removes all children nodes of given html element
  static removeAllChildren(elem) {
    while (elem.children.length > 0) {
      elem.removeChild(elem.firstChild);
    }
  }

  // This function creates and returns the html element from given NFTElement object
  static createNFTElement(nft) {
    // Main wrapper for each NFT card on display
    // All the children will be added inside and this "result" element will be returned
    let result = document.createElement("div");
    result.classList.add("discover__content");

    // Image container creation and 4 small user profile pictures are added inside
    // This image container will be the first child of "result"
    let img = document.createElement("div");
    img.classList.add("content__img");
    img.style.backgroundImage = `url(assets/svgs/splash-${nft["imageIndex"]}.svg)`;
    for (let i = 1; i <= 4; i++) {
      let temp = document.createElement("div");
      temp.classList.add("content__user-pp", `user-pp${i}`);
      temp.style.backgroundImage = `url(assets/svgs/discover-user${i}.svg)`;
      img.appendChild(temp);
    }

    // This div will be the second child of "result" and it will contain information...
    // ...on bottom part of the nft card.
    let bottom = document.createElement("div");
    bottom.classList.add("content__bottom");

    // Children of "bottom" are going to be:
    // title, description(containing price & quantity), divider and time & bid button

    // First child of "bottom" - title
    let p = document.createElement("p");
    p.classList.add("content__title");
    p.appendChild(document.createTextNode(`${nft["title"]}`));

    // Second child of "bottom" - description
    let desc = document.createElement("div");
    desc.classList.add("content__desc");
    let span1 = document.createElement("span");
    span1.innerHTML = `<i class="fa-brands fa-ethereum"></i> <b> ${nft["price"]} ${nft["priceUnit"]}</b>`;

    let span2 = document.createElement("span");
    span2.appendChild(document.createTextNode("1 of 321"));
    desc.appendChild(span1);
    desc.appendChild(span2);

    // Third child of "bottom" - divider
    let divider = document.createElement("div");
    divider.classList.add("content__divider");

    // Fourth and last child of "bottom" - time & bid button
    let time = document.createElement("div");
    time.classList.add("content__time");
    let span3 = document.createElement("span");
    span3.appendChild(document.createTextNode(`${nft["timeRemaining"]} left`));
    let a = document.createElement("a");
    a.appendChild(document.createTextNode("Place a bid"));
    time.appendChild(span3);
    time.appendChild(a);

    // Append all 4 children to "bottom" with all descendants inside them
    bottom.appendChild(p);
    bottom.appendChild(desc);
    bottom.appendChild(divider);
    bottom.appendChild(time);

    // Append 2 children of "result" to it
    result.appendChild(img);
    result.appendChild(bottom);

    return result;
  }
}
