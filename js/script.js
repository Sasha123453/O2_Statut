$(document).ready(function(){
    $(".twoEqualThree").slick({
      prevArrow: '<button class="sliderButtons firstArrow"><</button>',
      nextArrow: '<button class="sliderButtons secondArrow">></button>'
    });
    $("#firstBooksBlocks").slick({ 
      slidesToShow: 4,
      prevArrow: $("#firstBookBlockPrevious"),
      nextArrow: $("#firstBookBlockNext"),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    $("#secondBooksBlocks").slick({ 
      slidesToShow: 4,
      prevArrow: $("#secondBookBlockPrevious"),
      nextArrow: $("#secondBookBlockNext"),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    $(".newsBlocks").slick({
      slidesToShow: 3,
      prevArrow: $("#newsPrevious"),
      nextArrow: $("#newsNext"),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
      
    });
});

/*
<div class="someImagesSliderButtons">
<button class="sliderButtons"><</button>
<button class="sliderButtons">></button>
</div>
*/
