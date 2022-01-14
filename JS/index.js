var member = document.querySelector('.memLogin');
var member3 = document.querySelector('.memLogin3');
var close = document.querySelector('#closeLogin');
//登入視窗
function showloginWin(){
    loginWin=document.querySelector('.loginWin');
    if(member.title=="登入"){
        loginWin.style.display='block';
    }
}

function closeLoginF(){
        loginWin.style.display='none';
}
//滑動

var bodyClass = document.querySelector('#navgation');
var lastScrollY = 0;
window.addEventListener('scroll', function(){
  var st = this.scrollY;
  // 判斷是向上捲動，而且捲軸超過 200px
  if(st>100){
  if( st <= lastScrollY) {
    bodyClass.classList.remove('hidenav');
  }else{
    bodyClass.classList.add('hidenav');
  }
  lastScrollY = st;
}
});



window.onload=function(){
    member.addEventListener('click',showloginWin,false);
    member3.addEventListener('click',showloginWin,false);
    close.addEventListener('click',closeLoginF,false);
    //滑動視窗
}



//JQ
$('#mobiMenu li').click(function(){
    $(this).children('.submenu').stop(true).slideToggle();
    $('.submenu').not($(this).children('.submenu')).slideUp();
});


//輪播
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            415:{
                items:3,
                nav:false
            },
            769:{
                items:4,
                nav:true,
                loop:true
            }
        }
    })
})

