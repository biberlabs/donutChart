var percent 	= $('.circle-chart').data('percent');
if(percent > 100) {percent = 100;}
var degree 		= 3.6 * percent;

var chartSize 	= $('.circle-chart').data('chart-size');

$('.circle-chart .percent').html(percent+'%');
$('.circle-chart .bar').css('-webkit-transform', 'rotate('+degree+'deg)');
$('.circle-chart').css('font-size', chartSize+'px');

$('.circle-chart .bar')
    .css('-moz-transform', 'rotate('+degree+'deg)')
    .css('-ms-transform', 'rotate('+degree+'deg)')
    .css('-o-transform', 'rotate('+degree+'deg)')
    .css('transform', 'rotate('+degree+'deg)');
    
if (percent > 50){
    $('.circle-chart .slice').css('clip', 'rect(auto, auto, auto, auto)');
      
    $('.circle-chart .fill')
        .css('-webkit-transform', 'rotate(180deg)')
        .css('-moz-transform', 'rotate(180deg)').css('-ms-transform', 'rotate(180deg)')
        .css('-o-transform', 'rotate(180deg)')
        .css('transform', 'rotate(180deg)');
}
