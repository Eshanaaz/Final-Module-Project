
/////////////////////////////NAVBAR//////////////////ALLNAVBARS///////////////////

function openFunction() {
  document.getElementById("menu").style.width = "300px";
  document.getElementById("mainbox").style.marginLeft = "300px";
  document.getElementById("mainbox").innerHTML = "Click on Cross Element and Close Menu";
}


function closeFunction() {
  document.getElementById("menu").style.width = "0px";
  document.getElementById("mainbox").style.marginLeft = "0px";
  document.getElementById("mainbox").innerHTML = "&#9776; <h3>Imran<span>& Company</span></h3>";
}


/////////////////////////////////////HOME NAVBAR/////////////////////////////////


const hamburger_menu = document.querySelector(".HamBurger-menu");
const container = document.querySelector(".HomeCon");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});


////////////////////// DIV 2////////////////MOVING CYCLE//////////////HOME




$(document).ready(function () {

  $surface = $(`.surface`);
  $car = $(`.car`);


  $(document).on(`keypress`, function (e) {
    if (e.which == 13) {
      $($surface).toggleClass(`moveRight`);
      $($car).toggleClass('suspension');
    }
  })

});


////////////////////// DIV 3////////////////LOGIN SIGNUP FORM/////////////////////



var color = document.documentElement.style;
function light() {
  color.setProperty('--bg1', '#c2c2c4');
  color.setProperty('--bg2', '#e2e2e4');
  color.setProperty('--boxShadow', ' #a1a1a3');
  color.setProperty('--Shadow1', '#848486');
  color.setProperty('--Shadow2', '#fcfcfe');
  color.setProperty('--SforIcon1', '#ececee');
  color.setProperty('--SforIcon2', '#8a8b8e');
  document.getElementById('lt').style.display = "none";
  document.getElementById('dk').style.display = "block";
}

function dark() {
  color.setProperty('--bg1', '#040406');
  color.setProperty('--bg2', '#323234');
  color.setProperty('--boxShadow', ' #010203');
  color.setProperty('--Shadow1', '##040406');
  color.setProperty('--Shadow2', '#444446');
  color.setProperty('--SforIcon1', '#2a2b2c');
  color.setProperty('--SforIcon2', '#020305');
  document.getElementById('lt').style.display = "block";
  document.getElementById('dk').style.display = "none";
}

//////////////////////////TOGGLER/////////////////////////

function bulbToggler(id, element){
  if(id==1){
      element.src = "./images/tom.png"
  }else{
      element.src = ""

  }
  
}