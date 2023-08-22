const modal = document.getElementById('modal');
const header = document.querySelector('header');
const container = document.getElementById('container');

const form = document.getElementById('form-tambah');
form.addEventListener('click', function(){
    modal.classList.toggle('hidden');
})