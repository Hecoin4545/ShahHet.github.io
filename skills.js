const ButtonHtml = document.getElementById('skil-1');
const ButtonCss = document.getElementById('skil-2');
const Buttonjs = document.getElementById('skil-3');
const Buttonnode = document.getElementById('skil-4');
const Buttonreact = document.getElementById('skil-5');
const Buttonmongodb = document.getElementById('skil-6');
const Html = document.getElementById('html');
const css = document.getElementById('css');
const javascript = document.getElementById('javaScript');
const nodejs = document.getElementById('nodejs');
const reactjs = document.getElementById('reactjs');
const mongo = document.getElementById('mongo');
const total = document.querySelector('#total');
const htmlHead = document.querySelector('.html-headline');
const cssHead = document.querySelector('.css-headline');
const jsHead = document.querySelector('.js-headline');
const nodeHead = document.querySelector('.node-headline');
const reactHead = document.querySelector('.react-headline');
const mongoHead = document.querySelector('.mongo-headline');
const totalHead = document.querySelector('.total-headline');


function skills(a,b){
    mongo.style.display = 'none'
    reactjs.style.display = 'none'
    nodejs.style.display = 'none'
    javascript.style.display = 'none'
    css.style.display = 'none'
    Html.style.display = 'none'
    a.style.display = 'block'
    htmlHead.style.display = 'none'
    cssHead.style.display = 'none'
    jsHead.style.display = 'none'
    nodeHead.style.display = 'none'
    reactHead.style.display = 'none'
    mongoHead.style.display = 'none'
    b.style.display = 'block'
}

function notskill(a,b){
    a.style.display = 'none';
    b.style.display = 'none';
}

skills(totalHead , total)
ButtonHtml.addEventListener('click', function () {
    skills(Html , htmlHead);
    notskill(total , totalHead)
})

ButtonCss.addEventListener('click', function () {
    notskill(total , totalHead)
    skills(css , cssHead);
})

Buttonjs.addEventListener('click', function () {
    notskill(total , totalHead)
    skills(javascript , jsHead);
})


Buttonnode.addEventListener('click', function () {
    notskill(total , totalHead)
    skills(nodejs , nodeHead);
})


Buttonreact.addEventListener('click', function () {
    notskill(total , totalHead)
    skills(reactjs , reactHead);
})


Buttonmongodb.addEventListener('click', function () {
    notskill(total , totalHead)
    skills(mongo , mongoHead);
})