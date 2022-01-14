var member = document.querySelector('.memLogin');
var close = document.querySelector('#closeLogin');
var loginWin=document.querySelector('.loginWin');
//登入視窗
function showloginWin(){
    if(member.title=="登入"){
        loginWin.style.display='block';
    }
    if(member2.title=="登入"){
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


//更多商品
var listClass = document.querySelector('.mobil-list');
var lastScrollY2 = 0;
function item(){
  var st = this.scrollY;
  // 判斷是向上捲動，而且捲軸超過 200px
  if(st>100){
  if( st <= lastScrollY2) {
    listClass.classList.add('hidelist');
  }else{
    listClass.classList.remove('hidelist');
  }
  lastScrollY2 = st;
}
};



window.onload=function(){
    member.addEventListener('click',showloginWin,false);
    close.addEventListener('click',closeLoginF,false);
    window.addEventListener('scroll',item,false);
}



//JQ
$('#mobiMenu li').click(function(){
    $(this).children('.submenu').stop(true).slideToggle();
    $('.submenu').not($(this).children('.submenu')).slideUp();
});
$('.mobil-list li').click(function(){
    $(this).children('.sublist').stop(true).slideToggle();
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

