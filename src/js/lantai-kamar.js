
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

const details_selector = document.querySelectorAll('.detail');
const cek_detail = (detail) =>{
    detail.addEventListener('click', (e)=>{
        display();
        modal(modal_detail);
        e.target.parentElement.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        const td = document.querySelectorAll('#cek td');
        for(let i = 1; i <= 3; i++){
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

const hapus_selector = document.querySelectorAll('.hapus');
const cek_hapus = (hapus)=>{
    hapus.addEventListener('click', (e)=>{
        display();
        modal(modal_detail_hapus);
        e.target.parentElement.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        const td = document.querySelectorAll('#cek td');
        for(let i = 1; i <= 3; i++){
            detail_hapus[i].innerText = td[i].innerText;
        }
    })
}
hapus_selector.forEach(cek_hapus);

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

const cek_edit = (edit)=>{
    edit.addEventListener('click', (e)=>{
        display();
        modal(modal_edit);

        e.target.parentElement.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        const tds = document.querySelectorAll('#cek td');

        lantai_edit.value = tds[1].innerText;
        keterangan_edit.value = tds[2].innerText;
        status_edit.value = tds[3].innerText;

    })
}
edits_selector.forEach(cek_edit);

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
