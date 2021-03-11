$(document).ready(function(){
    $('.menu__burger').click(function(){
        $('.menu__mobile ul').toggleClass('active');
    });

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
    });

    $('#file').each(function() {
        var $input = $(this),
            $label = $input.next('.form-group__label'),
            labelVal = $label.html();
        
       $input.on('change', function(element) {
          var fileName = '';
          if (element.target.value) fileName = element.target.value.split('\\').pop();
          fileName ? $label.addClass('has-file').find('.form-group__text').html(fileName) : $label.removeClass('has-file').html(labelVal);
       });
    });
});

