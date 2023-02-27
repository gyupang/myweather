$(function () {
    $('.threetemp-body').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('#searchbtn').on('click', function () {
        if ($('.searchinput').hasClass('act')) {
            $('.searchinput').removeClass('act');

        } else {
            $('.searchinput').addClass('act');
        }
        $('.searchinput input').focus();
    });


    $('#search-city').on('keypress', function (e) {
        if (e.which == 13 && !e.shiftKey) {
            const key = $(this).val();
            console.log(key);
            $(this).val('');
            $('.searchinput').removeClass('act')
        }
    })
    // 엔터키 13번 입력하면 value 값을 받고 act 클래스 검색창 제거


    
});//jq


function getLocation() {
    navigator.geolocation.getCurrentPosition(
    onWeatherSuccess, onWeatherError, {enableHighAccuracy:true}
  )}; 

const onWeatherSuccess=function(position){
const lat = position.coords.latitude;
const lon = position.coords.longitude;
console.log(lat,lon)
}
