const langElement = document.getElementById("content");
const newPara = document.createElement("p")
newPara.textContent = "Here is a more complete ";

const newAttribute = document.createElement("a")
newAttribute.textContent = "list"
newAttribute.href = "https://en.wikipedia.org/wiki/List_of_programming_languages";

//Append Child
newPara.appendChild(newAttribute);
newPara.appendChild(document.createTextNode(" of langauges."));
langElement.appendChild(newPara);