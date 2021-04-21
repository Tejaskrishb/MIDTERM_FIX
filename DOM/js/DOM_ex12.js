const cobElement = document.getElementById("links");
const linkElement = document.createElement("li");
linkElement.id = "coblink";
const coblinkElement = document.createElement("a");
coblinkElement.textContent = "College of Business";
coblinkElement.href =  "https://www.csulb.edu/college-of-business";
linkElement.appendChild(coblinkElement);
cobElement.insertBefore(linkElement, document.getElementById("csulb2"));