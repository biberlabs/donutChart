(function ($) {
    $.fn.donutChart = function() {
        return this.each(function(index, that) {
            // .circle-chart class is use for style. Look style.css file.
            $(that).addClass('circle-chart');
            var percent = $(that).data('percent') || 100;
            if(percent > 100) {
                percent = 100;
            }
            var degree = 3.6 * percent;

            var chartSize = $(that).data('chart-size');
            $(that).find('.percent').html(percent+'%');
            $(that).find('.bar').css('-webkit-transform', 'rotate('+degree+'deg)');
            $(that).css('font-size', chartSize+'px');
            $(that).find('.bar')
                .css('-moz-transform', 'rotate('+degree+'deg)')
                .css('-ms-transform', 'rotate('+degree+'deg)')
                .css('-o-transform', 'rotate('+degree+'deg)')
                .css('transform', 'rotate('+degree+'deg)');

            if (percent > 50){
                $(that).find('.slice').css('clip', 'rect(auto, auto, auto, auto)');
                  
                $(that).find('.fill')
                    .css('-webkit-transform', 'rotate(180deg)')
                    .css('-moz-transform', 'rotate(180deg)').css('-ms-transform', 'rotate(180deg)')
                    .css('-o-transform', 'rotate(180deg)')
                    .css('transform', 'rotate(180deg)');
            }

            return $(that); 
        });
    };
}(jQuery));




    

