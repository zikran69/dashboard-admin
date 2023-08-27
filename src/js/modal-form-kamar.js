
const header = document.querySelector('header');
const container = document.getElementById('container');
const layer = document.getElementById('layer');

const layer_h = 'h-screen';
const bg = 'grayscale';

//form
const modal_form = document.getElementById('modal-form');
const form = document.getElementById('form-tambah');
form.addEventListener('click', function(){
    modal_form.classList.toggle('hidden');
    modal_form.classList.add('flex');
    modal_form.classList.add(layer_h);
    layer.classList.toggle('hidden');
    layer.classList.add(layer_h);
    header.classList.add(bg);
    container.classList.add(bg);
});

// detail
const modal_detail = document.getElementById('modal-detail');
const details = document.querySelectorAll('.ri-search-line');
const cek_detail = function(e){
    e.addEventListener('click', ()=>{
        modal_detail.classList.toggle('hidden');
        layer.classList.toggle('hidden');
        layer.classList.add(layer_h);
        modal_detail.classList.add('flex');
        modal_detail.classList.add(layer_h);
        header.classList.add(bg);
        container.classList.add(bg);
    })
}
for (const detail of details){
    cek_detail(detail);
}

//hapus
const hapus = document.getElementById('modal-hapus');
const hapus_s = document.querySelectorAll('.ri-delete-bin-line');
const cek_hapus = function(e){
    e.addEventListener('click', ()=>{
        hapus.classList.toggle('hidden');
        layer.classList.toggle('hidden');
        layer.classList.add(layer_h);
        hapus.classList.add('flex');
        hapus.classList.add(layer_h);
        header.classList.add(bg);
        container.classList.add(bg);
    })
}
for (const hapus of hapus_s){
    cek_hapus(hapus);
}

// edit
const modal_edit = document.getElementById('modal-edit');
const edits = document.querySelectorAll('.ri-file-edit-line');
const cek_edit = function(e){
    e.addEventListener('click', ()=>{
        modal_edit.classList.toggle('hidden');
        layer.classList.toggle('hidden');
        layer.classList.add(layer_h);
        modal_edit.classList.add('flex');
        modal_edit.classList.add(layer_h);
        header.classList.add(bg);
        container.classList.add(bg);
    })
}
for (const edit of edits){
    cek_edit(edit);
}

