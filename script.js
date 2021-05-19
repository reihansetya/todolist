// variabel
const add = document.getElementById('btn');
const ul = document.getElementById('ul');
const inp = document.getElementById('input');
const del = document.createElement('span');
const li = document.querySelector('li')
const angka = document.querySelector('.clear h3');


//fungsi add
add.addEventListener('click', function(){
    let txt = inp.value
    if (txt == '') {
        alert('diketik bwang');
    }else{
        const li = document.createElement('li');
        const del = document.createElement('span');
        del.setAttribute("id", "closee")
        const delTxt = document.createTextNode('x');
        del.append(delTxt);
        li.append(txt);
        ul.appendChild(li);
        li.append(del);
        document.querySelector(".ul").style.textTransform = "capitalize";
        inp.value = ''

        count()
    }
})

//buat nge enter
function enter(e){
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that rusn
        let txt = inp.value
        if (txt == '') {
            alert('diketik bwang');
        }else{
            const li = document.createElement('li');
            const del = document.createElement('span');
            del.setAttribute("id", "closee")
            const delTxt = document.createTextNode('x');
            del.append(delTxt);
            li.append(txt);
            ul.appendChild(li);
            li.append(del);
            document.querySelector(".ul").style.textTransform = "capitalize";
            inp.value = ''
        }
    }
}

//fungsi delete tapi blm fix
// document.querySelector('ul').addEventListener('click', function (ev) {
//     if(ev.target.tagName == 'LI'){
//         ev.target.parentElement.remove(ev);
//         console.log(ev);
//         console.log(ev.target);
//     }
// })

//fungsi delete yang dh bener yahahhaha
ul.addEventListener('click', function(e){
    // console.log(e);
    if(e.target.tagName == 'SPAN'){
        // e.target.parentElement.style.display = 'none'
        e.target.parentElement.remove(e);
    }else{
        console.log(e.target);
    }
})

//coret kalo udah
ul.addEventListener('click', function(e){
    // console.log(e);
    if(e.target.tagName == 'LI'){
        e.target.style.textDecoration = 'line-through'
        e.target.style.backgroundColor = 'rgba(104, 104, 104, 0.5)'
    }else{
        console.log(e.target);
    }
})

//clear all
document.querySelector('#clear').addEventListener('click', function (ev) {
    if(ev.target.tagName == 'BUTTON'){
        const liall = document.querySelectorAll('li');
        liall.forEach(function(e){
            e.remove(e);
        })
    }
})







