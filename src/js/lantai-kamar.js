
const tabel = document.getElementById('tabel');
const header = document.querySelector('header');
const container = document.getElementById('container');
const layer = document.getElementById('layer');
const layer_h = 'h-screen';
const bg = 'grayscale';

function display(){
    layer.classList.toggle('hidden');
    layer.classList.toggle(layer_h);
    header.classList.toggle(bg);
    container.classList.toggle(bg);
}
function modal(form){
    form.classList.toggle('hidden');
    form.classList.toggle('flex');
    form.classList.toggle(layer_h);
}

// table data
const tds = document.querySelectorAll('td');
for(const td of tds){
    td.setAttribute('class','p-4 border-secondary-gray border border-b-2 border-opacity-10');
}

//-------- Add
const modal_add = document.getElementById('modal-add');
const cancel_add = document.querySelectorAll('#modal-add button')[0];
const save_add = document.querySelectorAll('#modal-add button')[1];
const tombol = document.getElementById('tambah');
tombol.addEventListener('click', ()=>{
    display();
    modal(modal_add);
});
cancel_add.addEventListener('click', ()=>{
    display();
    modal(modal_add);
})
save_add.addEventListener('click', (e)=>{
    newTable();
    emptyTable();
    display();
    modal(modal_add);
    e.preventDefault();
})

function newTr(target){
    const el = document.createElement('tr');
    const textEl = document.createTextNode('');
    el.appendChild(textEl);
    target.appendChild(el);
    return el;
}
let countTd = 0;
function newTd(target, isi){
    const el = document.createElement('td');
    const textEl = document.createTextNode(isi);
    el.appendChild(textEl);
    target.appendChild(el);
    el.setAttribute('class', 'p-4 border-secondary-gray border border-b-2 border-opacity-10');
    if(countTd==4) el.setAttribute('style' , 'display:none');
    countTd++;
    if(countTd>7) countTd=1;
    return el;
}
function emptyTable(){
    add_kategori.value = '';
    add_harga.value = '';
    add_fasilitas.value = '';
    add_keterangan.value = '';
    add_status.value = '';
}
function newDiv(target){
    const div = document.createElement('div');
    const text = document.createTextNode('');
    div.appendChild(text);
    target.appendChild(div);
    div.setAttribute('class', 'flex justify-center items-center flex-nowrap');
    div.setAttribute('id', 'sementara')
}
function newTable(){
    const trBaru = newTr(tabel);
    const td_no = newTd(trBaru, 'add');
    const td_kategori = newTd(trBaru, add_kategori.value);
    const td_harga = newTd(trBaru, add_harga.value);
    const td_fasilitas = newTd(trBaru, add_fasilitas.value);
    const td_keterangan = newTd(trBaru, add_keterangan.value);
    const td_status = newTd(trBaru, add_status.value);
    const td_foto = newTd(trBaru, '');
    newDiv(td_foto);
    const sementara = document.getElementById('sementara');
    sementara.innerHTML = '<button type="button" title="detail" class="detail mr-1 py-1 px-5 bg-green-400 rounded-md hover:bg-hover-green"><i class="ri-search-line text-white"></i></button> <button type="button" title="hapus" class="hapus mr-1 py-1 px-5 bg-red-400 rounded-md hover:bg-hover-red"><i class="ri-delete-bin-line text-white"></i></button> <button type="button" title="edit" class="edit py-1 px-5 bg-yellow-400 rounded-md hover:bg-hover-yellow"><i class="ri-file-edit-line text-white"></i></button>';
    sementara.removeAttribute('id');
}

// detail label
const detail_labels = document.querySelectorAll('#detail label');
for(const label of detail_labels){
    label.classList.add('font-raleway');
    label.classList.add('font-semibold');
    label.classList.add('text-blue-500');
    label.classList.add('text-2xl');
    label.classList.add('mr-2');
}

// detail
const modal_detail = document.getElementById('modal-detail');
const details = document.querySelectorAll('#detail span');
for(const span of details){
    span.classList.add('text-lg');
    span.classList.add('font-raleway');
}
const close_detail = document.querySelector('#modal-detail button');
const inputan = document.querySelectorAll('#modal-edit input');
const text_areas = document.querySelectorAll('#modal-edit textarea');
const setatus = document.querySelector('#modal-edit select');
const simpan = document.querySelectorAll('#modal-edit button')[1];

close_detail.addEventListener('click', ()=>{
    display();
    modal(modal_detail);
})


// HAPUS
const modal_hapus = document.getElementById('modal-hapus');
const modal_detail_hapus = document.getElementById('modal-detail-hapus');
const detail_hapus = document.querySelectorAll('#detail-hapus span');

const detail_hapus_labels = document.querySelectorAll('#detail-hapus label');
for(const label of detail_hapus_labels){
    label.classList.add('font-raleway');
    label.classList.add('font-semibold');
    label.classList.add('text-blue-500');
    label.classList.add('text-2xl');
    label.classList.add('mr-2');
}
for(const span of detail_hapus){
    span.classList.add('text-lg');
    span.classList.add('font-raleway');
}

const iya_hapus = document.querySelectorAll('#detail-hapus button')[0];
const kembali_hapus = document.querySelectorAll('#detail-hapus button')[1];
iya_hapus.addEventListener('click', ()=>{
    display();
    modal(modal_detail_hapus);
    const select_hapus = document.getElementById('cek');
    select_hapus.remove();
})
kembali_hapus.addEventListener('click', ()=>{
    display();
    modal(modal_detail_hapus);
})


// EDIT
const modal_edit = document.getElementById('modal-edit');
const lantai_edit = document.getElementById('lantai_edit');
const keterangan_edit = document.getElementById('keterangan_edit');
const status_edit = document.querySelector('#modal-edit select');
const cancel_edit = document.querySelectorAll('#modal-edit button')[0];
const simpan_edit = document.querySelectorAll('#modal-edit button')[1];
const edits_selector = document.querySelectorAll('.edit');

simpan_edit.addEventListener('click', (e)=>{
    display();
    modal(modal_edit);
    const checking = document.getElementById('cek');
    const tds = document.querySelectorAll('#cek td');

    tds[1].innerText = lantai_edit.value;
    tds[2].innerText = keterangan_edit.value;
    tds[3].innerText = status_edit.value;

    checking.removeAttribute('id');

    e.preventDefault();
})
cancel_edit.addEventListener('click', ()=>{
    display();
    modal(modal_edit);
    const checking = document.getElementById('cek');
    checking.removeAttribute('id');
})


// selector from table
tabel.addEventListener('click', e=>{
    if(e.target.title=='detail' || e.target.className=='ri-search-line text-white'){
        display();
        modal(modal_detail);
        if(e.target.title=='detail'){
            e.target.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        }
        else if(e.target.className=='ri-search-line text-white'){
            e.target.parentElement.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        }
        const td = document.querySelectorAll('#cek td');
        for(let i = 1; i <= 3; i++){
            details[i].innerText = td[i].innerText;
        }
    }
    else if(e.target.title=='hapus' || e.target.className=='ri-delete-bin-line text-white'){
        display();
        modal(modal_detail_hapus);
        if(e.target.title=='hapus'){
            e.target.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        }
        else if(e.target.className=='ri-delete-bin-line text-white'){
            e.target.parentElement.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        }
        const td = document.querySelectorAll('#cek td');
        for(let i = 1; i <= 3; i++){
            detail_hapus[i].innerText = td[i].innerText;
        }
    }
    else if(e.target.title=='edit' || e.target.className=='ri-file-edit-line text-white'){
        display();
        modal(modal_edit);
        if(e.target.title=='edit'){
            e.target.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        }
        else if(e.target.className=='ri-file-edit-line text-white'){
            e.target.parentElement.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        }
        const tds = document.querySelectorAll('#cek td');
        lantai_edit.value = tds[1].innerText;
        keterangan_edit.value = tds[2].innerText;
        status_edit.value = tds[3].innerText;
    }
})


























// const edits_selector = document.querySelectorAll('.edit');
// const cek_edit = (edit)=>{
//     edit.addEventListener('click', (e)=>{
//         display();
//         modal(modal_edit);

//         const inputan = document.querySelectorAll('#modal-edit input');
//         const text_areas = document.querySelectorAll('#modal-edit textarea');
//         const setatus = document.querySelector('#modal-edit select');
//         const simpan = document.querySelectorAll('#modal-edit button')[1];
//         e.target.parentElement.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
//         const tds = document.querySelectorAll('#cek td');

//         inputan[0].value = tds[1].innerText;
//         text_areas[0].value = tds[2].innerText;
//         setatus.value = tds[3].innerText;
//     })
// }
// edits_selector.forEach(cek_edit);
