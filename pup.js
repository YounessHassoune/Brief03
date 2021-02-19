


//-----------------------------drop-menu-problem---------------------
var check = document.querySelector("body > nav > label.checkbtn")
var nav = document.querySelector("body > nav > ul");
nav.addEventListener('click', function (e) {


    if (e.target.nodeName == 'A') {

        nav.style.left = "-100%";
    }


})
check.addEventListener('click', function (e) {

        nav.style.left = "0";

})


//------------------------contact-us-form---------------------------------------

var popbtn = document.querySelector('.send');
var pop = document.querySelector('.pop-up');
var closex =document.querySelector('.close');

popbtn.addEventListener('click', function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name == '' || email == '' || subject == '' || message == '') {

        alert('empty fields');
    }
    else {
        pop.querySelector('#e1 p').innerHTML = name;
        pop.querySelector('#e2 p').innerHTML = email;
        pop.querySelector('#e3 p').innerHTML = subject;
        pop.querySelector('#e4 p').innerHTML = message;
        pop.classList.add('pop-active');
    }

});


closex.addEventListener('click', function () {
    pop.classList.remove('pop-active');
    var name = document.getElementById("name").value = '';
    var email = document.getElementById("email").value = '';
    var subject = document.getElementById("subject").value = '';
    var message = document.getElementById("message").value = '';


});



