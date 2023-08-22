
const header = document.querySelector('header');
const container = document.getElementById('container');

//form
const modal_form = document.getElementById('modal-form');
const form = document.getElementById('form-tambah');
form.addEventListener('click', function(){
    modal_form.classList.toggle('hidden');
});

// detail
const modal_detail = document.getElementById('modal-detail');
const details = document.querySelectorAll('.ri-search-line');
const cek_detail = function(e){
    e.addEventListener('click', ()=>{
        modal_detail.classList.toggle('hidden');
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
    })
}
for (const edit of edits){
    cek_edit(edit);
}