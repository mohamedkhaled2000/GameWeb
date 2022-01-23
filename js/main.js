// document.querySelector("body > div.hero-area > div > div.owl-stage-outer > div")

$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    autoplay:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


$('.div3').click(function(){
    $('.div2').html(  
'        <iframe width="750" height="505" src="https://www.youtube.com/embed/Go0DcmnAbV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'        ) 
})
$('.div4').click(function(){
    $('.div2').html(
      '<iframe width="750" height="505" src="https://www.youtube.com/embed/0E44DClsX5Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' 
    ) 
})
$('.div5').click(function(){
    $('.div2').html(
      '<iframe width="750" height="505" src="https://www.youtube.com/embed/UKDiWMgM5c8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' 
    ) 
})
$('.div6').click(function(){
    $('.div2').html(
      '<iframe width="750" height="505" src="https://www.youtube.com/embed/vWWy7V9rCrA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' 
    ) 
})
$('.div7').click(function(){
    $('.div2').html(
      '      <iframe width="750" height="505" src="https://www.youtube.com/embed/Go0DcmnAbV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' 
    ) 
})
$('.div8').click(function(){
    $('.div2').html(
      '      <iframe width="750" height="505" src="https://www.youtube.com/embed/Go0DcmnAbV4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' 
    ) 
})