var member = document.querySelector('#memLogin');
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
    closeLogin.addEventListener('click',closeLoginF,false);
    mMenu.onclick=openSubmenu;
}

onload=init;