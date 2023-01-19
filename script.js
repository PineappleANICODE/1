var el = document.getElementById("showName");
el.addEventListener("click", formatName, false);

function formatName() {
  var NAME = document.getElementById('NAME').value;


  document.getElementById('fullName').innerHTML = NAME+ ", YOU DON'T EXIST. "+NAME+ ", YOU DON'T EXIST. "+NAME+ ", YOU DON'T EXIST. "+NAME+ ", YOU DON'T EXIST";
}
