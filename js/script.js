$(document).ready(function(){
    $(".twoEqualThree").slick({
      prevArrow: '<button class="sliderButtons"><</button>',
      nextArrow: '<button class="sliderButtons">></button>'
    });
    $("#firstBooksBlocks").slick({ 
      slidesToShow: 4,
      prevArrow: $("#firstBookBlockPrevious"),
      nextArrow: $("#firstBookBlockNext"),
    });
    $("#secondBooksBlocks").slick({ 
      slidesToShow: 4,
      prevArrow: $("#secondBookBlockPrevious"),
      nextArrow: $("#secondBookBlockNext"),
    });
    $(".newsBlocks").slick({
      slidesToShow: 3,
      prevArrow: $("#newsPrevious"),
      nextArrow: $("#newsNext"),
      
    });
});

/*
<div class="someImagesSliderButtons">
<button class="sliderButtons"><</button>
<button class="sliderButtons">></button>
</div>
*/