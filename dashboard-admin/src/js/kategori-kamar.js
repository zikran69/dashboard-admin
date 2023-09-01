
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
    if(countTd==5) el.setAttribute('style' , 'display:none');
    countTd++;
    if(countTd>7) countTd=1;
    return el;
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
    const trBaru = newTr(tr_table); 
    const td_no = newTd(trBaru, add_nomor.value);
    const td_kategori = newTd(trBaru, add_kategori.value);
    const td_harga = newTd(trBaru, add_harga.value);
    const td_fasilitas = newTd(trBaru, add_fasilitas.value);
    const td_status = newTd(trBaru, add_status.value);
    const td_keterangan = newTd(trBaru, add_keterangan.value);
    const td_foto = newTd(trBaru, '');
    newDiv(td_foto);
    const sementara = document.getElementById('sementara');
    sementara.innerHTML = '<button type="button" title="detail" class="detail mr-1 py-1 px-5 bg-green-400 rounded-md hover:bg-hover-green"><i class="ri-search-line text-white"></i></button> <button type="button" title="hapus" class="hapus mr-1 py-1 px-5 bg-red-400 rounded-md hover:bg-hover-red"><i class="ri-delete-bin-line text-white"></i></button> <button type="button" title="edit" class="edit py-1 px-5 bg-yellow-400 rounded-md hover:bg-hover-yellow"><i class="ri-file-edit-line text-white"></i></button>';
    sementara.removeAttribute('id');
}
function defaultTable(){
    add_kategori.value = 'Junior Suite';
    add_status.value = 'tersedia';
    add_keterangan.value = '';
}
let i = 1;
function nextTable(par){
    if(i==1){
        i += tr_tables.length;
        console.log(i);
    }
    else{
        i++;
        console.log(i)
    }
    i -=par;
    return i;
}

const tabel = document.getElementById('tabel');
const header = document.querySelector('header');
const container = document.getElementById('container');
const layer = document.getElementById('layer');
const layer_h = 'h-screen';
const bg = 'grayscale';
// td pada tabel 
const tds = document.querySelectorAll('td');
for(const td of tds){
    td.setAttribute('class','p-4 border-secondary-gray border border-b-2 border-opacity-10');
}

//-------- Tambah Kategori -------
const modal_add = document.getElementById('modal_add');
const add_cancel = document.querySelectorAll('#modal_add button')[0];
const add_save = document.querySelectorAll('#modal_add button')[1];
const tambah = document.getElementById('tambah');

const tr_table = document.getElementById('table_body')
const tr_tables = document.querySelectorAll('#table_body tr');

const add_nomor = document.getElementById('add_nomor');
const add_kategori = document.getElementById('add_kategori');
const add_harga = document.getElementById('add_harga');
const add_fasilitas = document.getElementById('add_fasilitas');
const add_keterangan = document.getElementById('add_keterangan');
const add_status = document.getElementById('add_status');

tambah.addEventListener('click', (e)=>{
    add_nomor.value = nextTable(0);
    display();
    modal(modal_add);
});
add_cancel.addEventListener('click', ()=>{
    add_nomor.value = nextTable(2);
    defaultTable();
    display();
    modal(modal_add);
})
add_save.addEventListener('click', (e)=>{
    newTable();
    defaultTable();
    display();
    modal(modal_add);
    e.preventDefault();
})
add_kategori.addEventListener('click', (e)=>{
    if(e.target.value == 'Junior Suite'){
        add_harga.value = '$100/Night';
        add_fasilitas.value = 'ac, tv';
    }
    else if(e.target.value == 'Executive Suite'){
        add_harga.value = '$200/Night';
        add_fasilitas.value = 'ac, tv, breakfast';
    }
    else if(e.target.value == 'Super Deluxe'){
        add_harga.value = '$300/Night';
        add_fasilitas.value = 'ac, tv, breakfast, lunch';
    }
})
//-------- akhir Tambah Kategori -------


//-------- Detail Kategori -------
// class pada label Detail
const detail_labels = document.querySelectorAll('#detail label');
for(const label of detail_labels){
    label.classList.add('font-raleway');
    label.classList.add('font-semibold');
    label.classList.add('text-blue-500');
    label.classList.add('text-2xl');
    label.classList.add('mr-2');
}

const modal_detail = document.getElementById('modal_detail');
const details = document.querySelectorAll('#detail span');
const detail_kategori = document.getElementById('detail_kategori');
const detail_harga = document.getElementById('detail_harga');
const detail_fasilitas = document.getElementById('detail_fasilitas');
const detail_status = document.getElementById('detail_status');
const detail_keterangan = document.getElementById('detail_keterangan');

for(const span of details){
    span.classList.add('text-lg');
    span.classList.add('font-raleway');
}
const close_detail = document.querySelector('#modal_detail button');
close_detail.addEventListener('click', ()=>{
    display();
    modal(modal_detail);
    const checking = document.getElementById('cek'); 
    checking.removeAttribute('id');
})
//-------- Akhir Detail Kategori -------

//-------- Hapus Kategori -------
// const modal_hapus = document.getElementById('modal-hapus');
const modal_detail_hapus = document.getElementById('modal-detail-hapus');
const detail_hapus = document.querySelectorAll('#hapus_detail span');

const detail_hapus_labels = document.querySelectorAll('#hapus_detail label');
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

const iya_hapus = document.querySelectorAll('#hapus_detail button')[0];
const kembali_hapus = document.querySelectorAll('#hapus_detail button')[1];
iya_hapus.addEventListener('click', ()=>{
    display();
    modal(modal_detail_hapus);
    const select_hapus = document.getElementById('cek');
    select_hapus.remove();
})
kembali_hapus.addEventListener('click', ()=>{
    display();
    modal(modal_detail_hapus);
    const checking = document.getElementById('cek');
    checking.removeAttribute('id');
})
//-------- Akhir Hapus Kategori -------

//-------- Edit Kategori -------
const modal_edit = document.getElementById('modal_edit');
const edit_kategori = document.getElementById('edit_kategori');
const edit_harga = document.getElementById('edit_harga');
const edit_fasilitas = document.getElementById('edit_fasilitas');
const edit_keterangan = document.getElementById('edit_keterangan');
const edit_status = document.querySelector('#modal_edit select');
const cancel_edit = document.querySelectorAll('#modal_edit button')[0];
const simpan_edit = document.querySelectorAll('#modal_edit button')[1];

simpan_edit.addEventListener('click', (e)=>{
    display();
    modal(modal_edit);
    const checking = document.getElementById('cek');
    const tds = document.querySelectorAll('#cek td');
    tds[1].innerText = edit_kategori.value;
    tds[2].innerText = edit_harga.value;
    tds[3].innerText = edit_fasilitas.value;
    tds[4].innerText = edit_status.value;
    tds[5].innerText = edit_keterangan.value;

    checking.removeAttribute('id');
    e.preventDefault();
})
cancel_edit.addEventListener('click', ()=>{
    display();
    modal(modal_edit);
    const checking = document.getElementById('cek');
    checking.removeAttribute('id');
})
//-------- Akhir Edit Kategori -------

//---------------- Selektor dengan Element Tabel
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
        detail_kategori.innerText = td[1].innerText;
        detail_harga.innerText = td[2].innerText;
        detail_fasilitas.innerText = td[3].innerText;
        detail_status.innerText = td[4].innerText;
        detail_keterangan.innerText = td[5].innerText;
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
        for(let i = 1; i <= 5; i++){
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
        edit_kategori.value = tds[1].innerText;
        edit_harga.value = tds[2].innerText;
        edit_fasilitas.value = tds[3].innerText;
        edit_status.value = tds[4].innerText;
        edit_keterangan.value = tds[5].innerText;
    }
})
//------------ Akhir Selektor dengan Element Tabel

