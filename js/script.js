$(document).ready(function(){
    $(".twoEqualThree").slick({
      prevArrow: '<button class="sliderButtons"><</button>',
      nextArrow: '<button class="sliderButtons">></button>'
    });
    $(".newBooksBlocks").slick({
      slidesToShow: 4,
      infinite: true,
      prevArrow: '<button class="sliderButtons"><</button>',
      nextArrow: '<button class="sliderButtons">></button>',
    });
    $(".newsBlocks").slick({
      slidesToShow: 3,
      prevArrow: '<button class="sliderButtons"><</button>',
      nextArrow: '<button class="sliderButtons">></button>',
    });
});

/*
<div class="someImagesSliderButtons">
<button class="sliderButtons"><</button>
<button class="sliderButtons">></button>
</div>
*/