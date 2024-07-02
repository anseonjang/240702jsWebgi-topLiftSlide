// 위아래 슬라이드
// setInterval - 일정시간동안 반복하여 실행
// 우리의 목적 : 각 슬라이드 1~3번을 순서대로 돌리기
// 0,1,2 

$(function () {
    var x = 0;
    setInterval(function () {
        // 실행문
        if (x < 2) {
            x++;
        } else {
            x = 0;
        }
        var sp = x * (-300) + "px";
        // var sp = x * (-1200) + "px";
        $(".slideList").animate({top:sp},400);
        // $(".slideList").animate({left:sp},400);

    },3000); // 3초
});