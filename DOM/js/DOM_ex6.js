const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const dictElement = document.getElementById("content");

words.forEach(word => {
  const dlElement = document.createElement("dl");
  const dicttermElement = document.createElement("dt");
  const dictdefElement = document.createElement("dd");
  dicttermElement.textContent = word.term;
  dictdefElement.textContent = word.definition;
  dlElement.appendChild(dicttermElement).style.fontWeight="bold";
  dlElement.appendChild(dictdefElement);
  dictElement.appendChild(dlElement);
}
);