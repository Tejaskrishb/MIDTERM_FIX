const yellowBg = () => {
  const paraElement = document.getElementsByTagName("p");
  for (const yellowText of paraElement){
      yellowText.style.backgroundColor = "yellow";
      yellowText.style.fontWeight = "bold";
  }
};

yellowBg();