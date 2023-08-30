
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
    display();
    modal(modal_add);
    e.preventDefault();
})


// detail label
const detail_labels = document.querySelectorAll('#detail label');
for(const label of detail_labels){
    label.classList.add('font-raleway');
    label.classList.add('font-semibold');
    label.classList.add('text-blue-500');
    label.classList.add('text-2xl');
    label.classList.add('mr-2');
}

// DETAIL   
const modal_detail = document.getElementById('modal-detail');
const details = document.querySelectorAll('#detail span');
for(const span of details){
    span.classList.add('text-lg');
}
const close_detail = document.querySelector('#modal-detail button');
const details_selector = document.querySelectorAll('.detail');
const cek_detail = (detail) =>{
    detail.addEventListener('click', (e)=>{
        display();
        modal(modal_detail);
        e.target.parentElement.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        const td = document.querySelectorAll('#cek td');
        for(let i = 1; i <= 5; i++){
            details[i].innerText = td[i].innerText;
        }
    })
}
details_selector.forEach(cek_detail);

close_detail.addEventListener('click', ()=>{
    display();
    modal(modal_detail);
})


// HAPUS
const modal_hapus = document.getElementById('modal-hapus');
const iya_hapus = document.querySelectorAll('#modal-hapus button')[0];
const kembali_hapus = document.querySelectorAll('#modal-hapus button')[1];
const hapus_selector = document.querySelectorAll('.hapus');
const cek_hapus = (hapus)=>{
    hapus.addEventListener('click', (e)=>{
        display();
        modal(modal_hapus);
    })
}
hapus_selector.forEach(cek_hapus);
iya_hapus.addEventListener('click', ()=>{
    display();
    modal(modal_hapus);
})
kembali_hapus.addEventListener('click', ()=>{
    display();
    modal(modal_hapus);
})


// EDIT
const modal_edit = document.getElementById('modal-edit');
const kategori_edit = document.getElementById('kategori_edit');
const harga_edit = document.getElementById('harga_edit');
const fasilitas_edit = document.getElementById('fasilitas_edit');
const keterangan_edit = document.getElementById('keterangan_edit');
const status_edit = document.querySelector('#modal-edit select');
const cancel_edit = document.querySelectorAll('#modal-edit button')[0];
const simpan_edit = document.querySelectorAll('#modal-edit button')[1];
const edits_selector = document.querySelectorAll('.edit');

const cek_edit = (edit)=>{
    edit.addEventListener('click', (e)=>{
        display();
        modal(modal_edit);

        e.target.parentElement.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        const tds = document.querySelectorAll('#cek td');

        kategori_edit.value = tds[1].innerText;
        harga_edit.value = tds[2].innerText;
        fasilitas_edit.value = tds[3].innerText;
        keterangan_edit.value = tds[4].innerText;
        status_edit.value = tds[5].innerText;

    })
}
edits_selector.forEach(cek_edit);

simpan_edit.addEventListener('click', (e)=>{
    display();
    modal(modal_edit);
    const checking = document.getElementById('cek');
    const tds = document.querySelectorAll('#cek td');

    tds[1].innerText = kategori_edit.value;
    tds[2].innerText = harga_edit.value;
    tds[3].innerText = fasilitas_edit.value;
    tds[4].innerText = keterangan_edit.value;
    tds[5].innerText = status_edit.value;

    checking.removeAttribute('id');

    e.preventDefault();
})
cancel_edit.addEventListener('click', ()=>{
    display();
    modal(modal_edit);
    const checking = document.getElementById('cek');
    checking.removeAttribute('id');
})
