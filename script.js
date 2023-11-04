// let box_tag = document.querySelector('div') // tag  // document - документ это наш HTML, query - запрос, Selector - body, class, id 
// let box_class = document.querySelector('.box') // class querySelector - это как find, она находить только первый попавшийся
// let box_id = document.querySelector('#axror') // id #- hashtag


// boxes = document.querySelectorAll('.box') // all elems - это как filter, она находить все элементы

// console.log(boxes);



// Собития - это каждая движния клиента

// let box = document.querySelector('.box')
// let body = document.body // body это особенно элемент у которого свой способ получения
// console.log(body);

// box.onclick = () => { // слушитель событиями 
//     console.log('click');
// }

// // cтарый версия
// box.addEventListener('click', () => {
//     console.log('click');
// })


// box.ondblclick = () => {
//     console.log('double click');
// }


// box.onmouseenter = () => {
//     console.log('entered');
// }


// box.onmouseleave = () => {
//     console.log('left');
// }


// box.onmousemove = () => {
//     console.log('moving...');
// }


// body.onscroll = () => {
//     console.log('scrolling ...');
// }



// Классы

// box.onclick = () => { // слушитель событиями 
// box.className = "blue" // className больше нужно если я хочу убрать все классы и место него поствавить только один

// чтобы добавлять и удалить класс
// box.classList.add('blue') // добавления
// box.classList.remove('box') // удаления

// console.log(
//     box.classList.contains('box') // проверка с помощью contains - содержится
// );

// if (box.classList.contains('blue')) {
//     box.classList.remove('blue')
// } else {
//     box.classList.add('blue')
// }

// box.classList.toggle('blue') // toggle - переключатель 
// }



// let box_fr = document.querySelector('.first')
// let box_sc = document.querySelector('.second')

// box_fr.onclick = () => {
//     box_sc.classList.toggle('blue')
// }

// box_sc.onclick = () => {
//     box_fr.classList.toggle('blue')
// }



// let box = document.querySelector('.box')
// let h1 = document.querySelector('#title')

// box.onclick = () => {
//     box.classList.toggle('blue')

//     if (h1.innerText === "Chill zone") { // innerText - внутренний текст
//         h1.innerHTML= "Work <strong>zone</strong>" // innerHTML - он считает как и текст как и теги
//     } else {
//         h1.innerHTML = "Chill <b>zone</b>" // innerHTML - он считает как и текст как и теги
//     }
// }


// let inp = document.querySelector('input')
// let btn = document.querySelector('button')

// btn.onclick = () => {
//     // console.log(
//     //     inp.getAttribute('type') // get - получить Attribute - атрибут // посмотреть атрибут с помощью getAttribute
//     // );

//     if (inp.getAttribute('type') === 'password') {
//         inp.setAttribute('type', 'text')
//         btn.innerHTML = "🙈"
//     } else {
//         btn.innerHTML = "🐵"
//         inp.setAttribute('type', 'password')
//     }

//     // inp.setAttribute('type', 'text') // set - установить Attribute - атрибут // изменить атрибут с помощью setAttribute
// }



// Homework

let count = 0;

document.getElementById("btn_up").onclick = function () {
    count += 1;
    document.getElementById("count_animation").innerHTML = count;
}

document.getElementById("btn_down").onclick = function () {
    count -= 1;
    document.getElementById("count_animation").innerHTML = count;
}

document.getElementById("btn_reset").onclick = function () {
    count = 0;
    document.getElementById("count_animation").innerHTML = count;
}

let btnRandom = document.getElementById('btn_random');
let countAnimation = document.getElementById('count_animation');

btnRandom.onclick = () => {
    let count = Math.floor(Math.random() * 101);
    countAnimation.innerText = count;
}