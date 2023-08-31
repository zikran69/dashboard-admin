const form = document.querySelector('form');
const userName = document.getElementById('userName');
const password = document.getElementById('passWord');
const tombol = document.querySelector('button');

tombol.addEventListener('click', function(){
    if(userName.value=='admin' && password.value=='admin') form.setAttribute('action','./src/pages/dashboard/dashboard.html');
    else form.setAttribute('action','https://bootcamp-8.github.io/dashboard-admin/src/pages/dashboard/dashboard.html?username=&password=');
})

