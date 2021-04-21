// Newspaper list
const newspapers = ["https://www.nytimes.com", 
"https://www.washingtonpost.com", 
"http://www.economist.com"];

const newsElement = document.getElementById("content");

newspapers.forEach(newspaper => {
  const linkElement = document.createElement("a");
  const brElement = document.createElement("br");
  linkElement.textContent = newspaper;
  linkElement.href = newspaper;
  newsElement.appendChild(linkElement);
  newsElement.appendChild(brElement);
}
);