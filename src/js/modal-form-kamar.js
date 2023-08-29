
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
// 
const details = document.querySelectorAll('#detail span');
const modal_detail = document.getElementById('modal-detail');
const modal_hapus = document.getElementById('modal-hapus');
const modal_edit = document.getElementById('modal-edit');

const inputan = document.querySelectorAll('#modal-edit input');
const text_areas = document.querySelectorAll('#modal-edit textarea');
const setatus = document.querySelector('#modal-edit select');
const simpan = document.querySelectorAll('#modal-edit button')[1];

const tabel = document.getElementById('tabel');
tabel.addEventListener('click', function(e){
    // detail form
    if(e.target.className == "ri-search-line text-white"){
        display();
        modal(modal_detail);
        e.target.parentElement.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        const td = document.querySelectorAll('#cek td');
        for(let i = 1; i <= 5; i++){
            details[i].innerText = td[i].innerText;
        }
    } 
    // hapus form
    else if(e.target.className == "ri-delete-bin-line text-white"){
        display();
        modal(modal_hapus);
    }
    // edit form
    else if(e.target.className == "ri-file-edit-line text-white"){
        display();
        modal(modal_edit);

        const inputan = document.querySelectorAll('#modal-edit input');
        const text_areas = document.querySelectorAll('#modal-edit textarea');
        const setatus = document.querySelector('#modal-edit select');
        const simpan = document.querySelectorAll('#modal-edit button')[1];
        e.target.parentElement.parentElement.parentElement.parentElement.setAttribute('id', 'cek');
        const tds = document.querySelectorAll('#cek td');

        inputan[0].value = tds[1].innerText;
        inputan[1].value = tds[2].innerText;
        text_areas[0].value = tds[3].innerText;
        text_areas[1].value = tds[4].innerText;
        setatus.value = tds[5].innerText;

        // simpan.addEventListener('click', ()=>{  
        //     tds[1].innerText = inputan[0].value;
        //     tds[2].innerText = inputan[1].value;
        //     tds[3].innerText = text_areas[0].value;
        //     tds[4].innerText = text_areas[1].value;
        //     tds[5].innerText = setatus.value;
            
        //     display();
        //     modal(modal_edit);
        // })      
    }
})
//-------------------------
