function myFunction() {
  var NAME = document.getElementById("NAME").value;
  var text;

  
  if (NAME === "searcher") {
    text = "Not yet...";
    
  
  } else if (NAME === "Searcher") {
    text = "Not yet...";
    
    } else if (NAME === "God") {
    text = "Really? I don't believe you. Prove it <link>";
      
       } else if (NAME === "god") {
    text = "Not even capitalised!! The real God would be more careful";
    
  
  } else {
    text = NAME+ ", YOU DON'T EXIST. "+NAME+ ", YOU DON'T EXIST. "+NAME+ ", YOU DON'T EXIST. "+NAME+ ", YOU DON'T EXIST";
  }
  document.getElementById("demo").innerHTML = text;
}
