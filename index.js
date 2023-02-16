// point a
let div = document.createElement('div') 
let box = document.createElement('div')
let image = document.createElement('img')
let boxes = document.createElement('div')
let h2 = document.createElement('h2')
let p = document.createElement('p')
let button = document.createElement('button')
let logo = document.createElement ('div')
let imgOne = document.createElement('img')
let spanOne = document.createElement('span')
let imgTwo = document.createElement('img')
let spanTwo = document.createElement('span')
let imgThree = document.createElement('img')
let spanThree = document.createElement('span')

// point b
box.classList.add('box')
img.src = './img/81fPKd-2AYL 1.png'
boxes.classList.add('boxes')
h2.innerHTML = 'MEN’S CLOTHING (120)'
p.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
button.innerHTML = 'add'
logo.classList.add('logo')
imgOne.src = './img/dollar.svg'
spanOne.innerHTML = '105'
imgTwo.src = './img/star.svg'
spanTwo.innerHTML = '3.5'
imgThree.innerHTML = './img/capp.svg'
spanThree.innerHTML = '150'
// img.innerHTML = `url{$im}`
// for(let i=0; i<=3; i++){
//     let images = document.createElement('img')
//     let spam = document.createElement('span')
//     images.classList.add = 'img'
//     span.innerHtML = '105'
//     boxes.append(images)
// }



// point c
div.append('box, boxes')
box.append('image')
image.append('img')
boxes.append(h2, p, button, logo)
logo.append('img, span')
document.body.prepend('div')
