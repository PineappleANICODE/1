var el = document.getElementById("showName");
el.addEventListener("click", formatName, false);

function formatName() {
  var NAME = document.getElementById('NAME').value;

  
  if (NAME === "searcher") {
    text = "Not yet...";
    
  
  } else if (NAME === "Searcher") {
    text = "Not yet...";
    
    } else if (NAME === "God") {
    text = "Really? I don't believe you. Prove it <link>";
      
       } else if (NAME === "god") {
    text = "Not even capitalised!! The real God would be more careful";
    
  
  } else {
      document.getElementById('fullName').innerHTML = NAME+ ", YOU DON'T EXIST. "+NAME+ ", YOU DON'T EXIST. "+NAME+ ", YOU DON'T EXIST. "+NAME+ ", YOU DON'T EXIST";
  }
}


setTimeout(function(){ document.getElementById('div1').style.visibility = "visible"; },3000);
