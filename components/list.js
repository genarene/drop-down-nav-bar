export const list = (buttonName, className, listNames ) => {
    const listDiv = document.createElement("div");
    listDiv.classList.add(className);
    const listButton = document.createElement("button");
    listButton.textContent = buttonName;
    listDiv.appendChild(listButton);
    const dropdownUl = document.createElement("ul")
    listDiv.appendChild(dropdownUl);
    const liOne = document.createElement("li");
    const linkOne = document.createElement("a");
    linkOne.textContent = listNames[0];
    liOne.appendChild(linkOne);
    dropdownUl.appendChild(liOne);
    const liTwo = document.createElement("li");
    const linkTwo = document.createElement("a");
    linkTwo.textContent = listNames[1];
    liTwo.appendChild(linkTwo);
    dropdownUl.appendChild(liTwo);
    const liThree = document.createElement("li");
    const linkThree = document.createElement("a");
    linkThree.textContent = listNames[2];
    liThree.appendChild(linkThree);
    dropdownUl.appendChild(liThree);
    const liFour = document.createElement("li");
    const linkFour = document.createElement("a");
    linkFour.textContent = listNames[3];
    liFour.appendChild(linkFour);
    dropdownUl.appendChild(liFour);

    return listDiv;
}