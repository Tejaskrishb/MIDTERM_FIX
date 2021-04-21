linkInfo=()=>{
  //total no of links
  const linkElements = document.getElementsByTagName("a");
  const linkCount = linkElements.length;
  console.log(linkCount);

  if (linkCount > 0) {
    console.log(linkElements[0].getAttribute("href"));
    console.log(linkElements[linkCount - 1].getAttribute("href"));
  }

  return linkCount;
};

linkInfo();