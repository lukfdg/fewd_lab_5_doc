alert("Welcome to Eat Worthy");

var a;
function myFunction()
{
    if(a==1)
    {
        document.getElementById("TableMenu").style.display="";
        return a=0;
    }

    else
    {
        document.getElementById("TableMenu").style.display="inline";
    }
}

/* 
function myFunction() {
  var x = document.getElementById("Show Menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
*/

/*
var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick - function(){
    if (content.className == "open");
    content.className = "";
    button.innerHTML = "show more";
    { else }
    content.className = "open";
    button.innerHTML = "show less";
}
**/

var msg = '<h2>Opening Times</h2><p>Mon-Fri: ' + window.innerWidth + '</p>';
msg += '<p>Sat-Sun: ' + window.innerHeight + '</p>';
msg += '<h2>Menu</h2><p>items: ' + window.randomNum + '</p>';
msg += '<h2>Screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p>';


var el = document.getElementById('info');
el.innerHTML = msg;
alert('Current page: ' + window.location);

var msg2 = '<p><b>page title: </b>' + document.title + '<br />';
msg2 += '<b>page address: </b>' + document.URL + '<br />';
msg2 += '<b>last modified: </b>' + document.lastModified + '</p>';


var el2 = document.getElementById('footer');
el2.innerHTML = msg2;

var randomNum = Math.floor((Math.random() * 100) + 1);

var el3 = document.getElementById('info');
el3.innerHTML += '<h2>Tables Avaliable</h2><p>' + randomNum + '</p>';

var today = new Date();
var year = today.getFullYear();
var el4 = document.getElementById('footer');
el4.innerHTML += '<p>Copyright &copy;' + year + '</p>';
var today = new Date();
var year = today.getFullYear();
var est = new Date('Apr 16, 1996 15:45:55');
var difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);
var elMsg = document.getElementById('message');
elMsg.textContent = Math.floor(difference) + ' years putting art on the plate';