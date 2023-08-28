
const header = document.querySelector('header');
const container = document.getElementById('container');
const layer = document.getElementById('layer');

// class table data
const tds = document.querySelectorAll('td');
for(const td of tds){
    td.setAttribute('class','p-4 border-secondary-gray border border-b-2 border-opacity-10');
    td.classList.remove('hidden');
}
// class table header
// const ths = document.querySelectorAll('th');
// for(const th of ths){
//     th.setAttribute('class','border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left')
// }

// detail label
const detail_labels = document.querySelectorAll('#detail label');
for(const label of detail_labels){
    label.classList.add('font-raleway');
    label.classList.add('font-semibold');
    label.classList.add('text-blue-500');
    label.classList.add('text-2xl');
    label.classList.add('mr-2');
}
// detail span
const detail_spans = document.querySelectorAll('#detail span');
for(const span of detail_spans){
    span.classList.add('text-lg');
}

const layer_h = 'h-screen';
const bg = 'grayscale';

//form
const modal_form = document.getElementById('modal-form');
const form = document.getElementById('form-tambah');
form.addEventListener('click', ()=>{
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

        e.parentElement.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        const td = document.querySelectorAll('#cek td');
        for(let i = 1; i <= 5; i++){
            id_details[i-1].innerText = td[i].innerText;
        }
    })
}
details.forEach(cek_detail);

//hapus
const modal_hapus = document.getElementById('modal-hapus');
const hapus = document.querySelectorAll('.ri-delete-bin-line');
const cek_hapus = function(e){
    e.addEventListener('click', ()=>{
        modal_hapus.classList.toggle('hidden');
        layer.classList.toggle('hidden');
        layer.classList.add(layer_h);
        modal_hapus.classList.add('flex');
        modal_hapus.classList.add(layer_h);
        header.classList.add(bg);
        container.classList.add(bg);
    })
}
hapus.forEach(cek_hapus);

// edit
const modal_edit = document.getElementById('modal-edit');
const edits = document.querySelectorAll('.ri-file-edit-line');
const cek_edit = function(e){
    e.addEventListener('click', ()=>{
        modal_edit.classList.toggle('hidden');
        modal_edit.classList.add('flex');
        modal_edit.classList.add(layer_h);
        layer.classList.toggle('hidden');
        layer.classList.add(layer_h);
        header.classList.add(bg);
        container.classList.add(bg);
    })
}
edits.forEach(cek_edit);

