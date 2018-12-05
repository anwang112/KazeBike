var member = document.querySelector('.memLogin');
var member2 = document.querySelector('.memLogin2');
var close = document.querySelector('#closeLogin');
//登入視窗
function showloginWin(){
    loginWin=document.querySelector('.loginWin');
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
//子選單
var mMenu = document.querySelector('.mobile-a');
var submenu = document.querySelector('.submenu');
function openSubmenu(){
    submenu.style.display='block';
    if(submenu.style.display=='block'){
        submenu.style.display='none';
    }
    else{
        submenu.style.display='none'
    }
}
function init() {
    member.addEventListener('click',showloginWin,false);
    member2.addEventListener('click',showloginWin,false);
    closeLogin.addEventListener('click',closeLoginF,false);
    mMenu.onclick=openSubmenu;
}

onload=init;

//JQ
$('#mobiMenu li').click(function(){
    $(this).children('.submenu').stop(true)
    
    .slideToggle();
    $('.submenu').not($(this).children('.submenu')).slideUp();
});
// $('#itemMenu').click(function(){
//      $('#itemMenu .submenu').stop(true).slideToggle();

// });
// $('#mileMenu').click(function(){
//     $('#mileMenu .submenu').stop(true).slideToggle();
// });
// $('#kcoinsMenu').click(function(){
//     $('#kcoinsMenu .submenu').stop(true).slideToggle();
// });
// $('#actMenu').click(function(){
//     $('#actMenu .submenu').stop(true).slideToggle();
// });