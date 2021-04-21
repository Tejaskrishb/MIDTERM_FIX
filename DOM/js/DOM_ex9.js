//const displayText400 = () => { 
//  const levelElements = Array.from(document.getElementsByClassName("400level"));
//  levelElements.forEach(elemnet => {
//    console.log(elemnet);
//  });
//};

const displayText400 = () => {
  const displayElements = document.getElementsByClassName("400level");
  for (const displayText of displayElements){
      console.log(displayText.textContent);
  }
};

displayText400();