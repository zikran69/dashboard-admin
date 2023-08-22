// form
const modal = document.getElementById('modal-form');
const header = document.querySelector('header');
const container = document.getElementById('container');
const form = document.getElementById('form-tambah');
form.addEventListener('click', function(){
    modal.classList.toggle('hidden');
});

// detail
const details = document.querySelectorAll('.ri-search-line');
const cek_detail = function(e){
    e.addEventListener('click', ()=>{
        console.log('klik detail')
    })
}
for (const detail of details){
    cek_detail(detail);
}

// edit
const edits = document.querySelectorAll('.ri-file-edit-line');
const cek_edit = function(e){
    e.addEventListener('click', ()=>{
        console.log('klik edit')
    })
}
for (const edit of edits){
    cek_edit(edit);
}