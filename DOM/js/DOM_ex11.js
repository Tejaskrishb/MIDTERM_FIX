const divElement = document.getElementById("output");

const tblElement = document.createElement("table");

for (i = 1; i <= 12; i++){
  const trElement = document.createElement("tr");
  const tdElement = document.createElement("td");
  tdElement.textContent = i;
  if (i%4 === 0)
  {
    //tdElement.classList.add(bgBlue);
    tdElement.style.backgroundColor="lightblue";
  }
  trElement.appendChild(tdElement);
  tblElement.appendChild(trElement);
};

divElement.appendChild(tblElement);