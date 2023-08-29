
const header = document.querySelector('header');
const container = document.getElementById('container');
const layer = document.getElementById('layer');
const layer_h = 'h-screen';
const bg = 'grayscale';

function display(){
    layer.classList.toggle('hidden');
    layer.classList.add(layer_h);
    header.classList.add(bg);
    container.classList.add(bg);
}
function modal(form){
    form.classList.toggle('hidden');
    form.classList.add('flex');
    form.classList.add(layer_h);
}

// table data
const tds = document.querySelectorAll('td');
for(const td of tds){
    td.setAttribute('class','p-4 border-secondary-gray border border-b-2 border-opacity-10');
    td.classList.remove('hidden');
}

//-------- Add
const modal_add = document.getElementById('modal-add');
const tombol = document.getElementById('tambah');
tombol.addEventListener('click', ()=>{
    display();
    modal(modal_add);
});

// ------detail section
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
// form detail
const details = document.querySelectorAll('#detail span')
const modal_detail = document.getElementById('modal-detail');
const tabel = document.getElementById('tabel');
tabel.addEventListener('click', function(e){
    if(e.target.className == "ri-search-line text-white"){
        display();
        modal(modal_detail);
        e.target.parentElement.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        const td = document.querySelectorAll('#cek td');
        for(let i = 1; i <= 5; i++){
            details[i].innerText = td[i].innerText;
        }
    } 
})
//-------------------------

//---------------hapus
const modal_hapus = document.getElementById('modal-hapus');
const hapus = document.querySelectorAll('.ri-delete-bin-line');
const cek_hapus = function(e){
    e.addEventListener('click', ()=>{
        display();
        modal(modal_hapus);
    })
}
hapus.forEach(cek_hapus);

//----------------edit
const modal_edit = document.getElementById('modal-edit');
const edits = document.querySelectorAll('.ri-file-edit-line');
const cek_edit = function(e){
    e.addEventListener('click', ()=>{
        display();
        modal(modal_edit);
    })
}
edits.forEach(cek_edit);

