function myFunction() {
  var NAME = document.getElementById("NAME").value;
  var text;

  
  if (NAME === "searcher") {
    text = "Not yet...";
    
  
  } else if (NAME === "Searcher") {
    text = "Not yet...";
    
    } else if (NAME === "God") {
    text = "God would not be here. They have better things to do. A lower-rank etherial may be here though...";

      
       } else if (NAME === "god") {
    text = "Not even capitalised!! The real God would be more careful";

    } else if (NAME === "Angel") {
    text = "Really? You don't really look like one... Prove it: https://pineappleanicode.github.io/4frreeaesr/YouMadeHerCry.html";

      
       } else if (NAME === "angel") {
    text = "You didn't capitalise it...";
    
  
  } else {
    text = NAME+ ", YOU DON'T EXIST. "+NAME+ ", YOU DON'T EXIST. "+NAME+ ", YOU DON'T EXIST. "+NAME+ ", YOU DON'T EXIST";
  }
  document.getElementById("demo").innerHTML = text;
}
