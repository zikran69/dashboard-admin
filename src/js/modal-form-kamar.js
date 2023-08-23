
const header = document.querySelector('header');
const container = document.getElementById('container');
const layer = document.getElementById('layer');

//form
const modal_form = document.getElementById('modal-form');
const form = document.getElementById('form-tambah');
form.addEventListener('click', function(){
    modal_form.classList.toggle('hidden');
    layer.classList.toggle('hidden');
    header.classList.toggle('grayscale');
    container.classList.toggle('grayscale');
});

// detail
const modal_detail = document.getElementById('modal-detail');
const details = document.querySelectorAll('.ri-search-line');
const cek_detail = function(e){
    e.addEventListener('click', ()=>{
        modal_detail.classList.toggle('hidden');
        layer.classList.toggle('hidden');
        header.classList.toggle('grayscale');
        container.classList.toggle('grayscale');
    })
}
for (const detail of details){
    cek_detail(detail);
}

// edit
const modal_edit = document.getElementById('modal-edit');
const edits = document.querySelectorAll('.ri-file-edit-line');
const cek_edit = function(e){
    e.addEventListener('click', ()=>{
        modal_edit.classList.toggle('hidden');
        layer.classList.toggle('hidden');
        header.classList.toggle('grayscale');
        container.classList.toggle('grayscale');
    })
}
for (const edit of edits){
    cek_edit(edit);
}