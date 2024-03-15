'use strict';

const buttons = document.querySelectorAll("button");
const container = document.querySelector('.container');
let lastBtn = container.lastElementChild;
const newElement = `<button>This is a new button</button>`

const btnObserver = new IntersectionObserver((values)=>{
    const [entry] = values;
    if(entry.isIntersecting) {
        for(let i=0;i<11;i++){
        entry.target.parentElement.insertAdjacentHTML("beforeend",newElement)
        }
        btnObserver.unobserve(lastBtn);
        lastBtn = container.lastElementChild;
        btnObserver.observe(lastBtn);
    }
}) 
btnObserver.observe(lastBtn);

