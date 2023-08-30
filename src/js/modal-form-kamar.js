
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
const id_details = document.querySelectorAll('#detail span')
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

        e.parentElement.parentElement.parentElement.parentElement.setAttribute('id', 'tunjuk');
        const tunjuk = document.querySelectorAll('#tunjuk td');
        for(let i = 1; i <= 4; i++){
            id_details[i-1].innerText = tunjuk[i].innerText;
        }
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

// edit2
const modal_edit2 = document.getElementById('modal-edit-data');
const edits2 = document.querySelectorAll('.form-edit-data ');
const cek_edit2 = function(e){
    e.addEventListener('click', ()=>{
        modal_edit2.classList.toggle('hidden');
        layer.classList.toggle('hidden');
        layer.classList.add(layer_h);
        modal_edit2.classList.add('flex');
        modal_edit2.classList.add(layer_h);
        header.classList.add(bg);
        container.classList.add(bg);
    })
}
for (const edit2 of edits2){
    cek_edit2(edit2);
}
// detail2
const modal_detail2 = document.getElementById('modal-detail-data');
const details2 = document.querySelectorAll('.form-detail-data ');
const cek_detail2 = function(e){
    e.addEventListener('click', ()=>{
        modal_detail2.classList.toggle('hidden');
        layer.classList.toggle('hidden');
        layer.classList.add(layer_h);
        modal_detail2.classList.add('flex');
        modal_detail2.classList.add(layer_h);
        header.classList.add(bg);
        container.classList.add(bg);
    })
}
for (const detail2 of details2){
    cek_detail2(detail2);
}

//hapus2
const hapus2 = document.getElementById('modal-hapus2');
const hapus2_s = document.querySelectorAll('.modal-hapusnya');
const cek_hapus2 = function(e){
    e.addEventListener('click', ()=>{
        hapus2.classList.toggle('hidden');
        layer.classList.toggle('hidden');
        layer.classList.add(layer_h);
        hapus2.classList.add('flex');
        hapus2.classList.add(layer_h);
        header.classList.add(bg);
        container.classList.add(bg);
    })
}
for (const hapus2 of hapus2_s){
    cek_hapus2(hapus2);
}
