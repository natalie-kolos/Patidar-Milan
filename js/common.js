$(document).ready(function () {
  $(".carousel-responsive").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

$(document).ready(function () {
  $(".carousel-adv").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

$( document ).ready(function() {
  var usaSelect = document.getElementsByClassName("USA");
  var canadaSelect = document.getElementsByClassName("Canada");
  if($('#country').val() == 'USA'){
    for(var i = 0; i < usaSelect.length; i++){
        usaSelect[i].style.display = "block";
    }
  }else if ($('#country').val() == 'Canada'){
    for(var i = 0; i < canadaSelect.length; i++){
        canadaSelect[i].style.display = "block";
    }
  }
});
function yesnoCheck(that) {
    if (that.value == "yes") {
        document.getElementById("ifYes").style.display = "block";
    } else {
        document.getElementById("ifYes").style.display = "none";
    }
}
function countryCheck(that) {
  var usaSelect = document.getElementsByClassName("USA");
  var canadaSelect = document.getElementsByClassName("Canada");
    if (that.value == "USA") {
      for(var i = 0; i < usaSelect.length; i++){
        usaSelect[i].style.display = "block";
    }
    for(var i = 0; i < canadaSelect.length; i++){
      canadaSelect[i].style.display = "none";

    }
    } else {
      for(var i = 0; i < canadaSelect.length; i++){
        canadaSelect[i].style.display = "block";
    }
    for(var i = 0; i < usaSelect.length; i++){
        usaSelect[i].style.display = "none"; 
    }
    }
}
var input = document.querySelectorAll('.js-date')[0];
  
var dateInputMask = function dateInputMask(elm) {
  elm.addEventListener('keypress', function(e) {
    if(e.keyCode < 47 || e.keyCode > 57) {
      e.preventDefault();
    }
    
    var len = elm.value.length;
    
    // If we're at a particular place, let the user type the slash
    // i.e., 12/12/1212
    if(len !== 1 || len !== 3) {
      if(e.keyCode == 47) {
        e.preventDefault();
      }
    }
    
    // If they don't add the slash, do it for them...
    if(len === 2) {
      elm.value += '/';
    }

    // If they don't add the slash, do it for them...
    if(len === 5) {
      elm.value += '/';
    }
  });
};
  
dateInputMask(input);