var button = document.querySelector('.mobile_nav_menu'),
menuList = document.querySelector('.menu_list'),
menuOpen = false;
button.onclick = function(){
  if (menuOpen == false) {
    menuList.style.display = 'block';
    menuOpen = true;
  }else{
    menuList.style.display = 'none';
    menuOpen = false;
  }
}

//modal regist



var btnRegis = document.querySelectorAll('.button_open_modal'),
substrate = document.querySelector('.substrate_black_all'),
closeForm = document.getElementById('close'),
modal = document.getElementById('modal_reg');
for (var i in btnRegis) {
  btnRegis[i].onclick = function(){
    substrate.style.display ="block";
    modal.style.display ="block";
  }
};
closeForm.onclick = function(){
  substrate.style.display ="none";
  modal.style.display ="none";
}

/*

var but = document.querySelectorAll('div > .click');
for (var b in but)
but[b].onclick = function(){
  var father = this.parentNode;
  var a = father.querySelector('h2').innerHTML;
  document.querySelector('div#modal input').value = a;
};
*/
