// definisco liste array (titoli e paragrafi)
const arrayHeadlines = ['Panda Gigante', 'Panda Minore', 'Fiat Panda'];
const arrayParagraphs = [
    'E\' un mammifero appartenente alla famiglia degli orsi. Originario della Cina centrale, vive nelle regioni montuose del Sichuan; è divenuto, verso la seconda metà del XX secolo, un emblema nazionale cinese, dal 1982 raffigurato sulle monete auree cinesi (serie Panda Dorato), oltre che simbolo del WWF',
    'Noto anche come "panda rosso" per il colore del suo manto, molto simile a quello di una volpe. In Cina infatti, questo piccolo panda viene anche chiamato volpe di fuoco: questo nome ha ispirato il simbolo di Mozilla Firefox',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates beatae numquam aliquam est recusandae? Vero consequuntur enim illo soluta hic assumenda quos sequi dolorem, molestias magni totam adipisci iusto nisi.'
];

const arrayImages = [
    'src="./img/panda1.jpg"',
    'https://cdn.motor1.com/images/mgl/wg9mN/s1/fiat-panda-4x4-piccola-arrampicatrice.jpg',
    'src="./img/fiatpanda.jpg"'

];

let currentIndex = 0;

// aggancio variabili a DOM
const boxTitle = document.querySelector('.box-title');
const boxArticle = document.querySelector('.box-text');
const boxImages = document.querySelector('.box-images');


// stampo nel DOM in relazione allo specifico elemento dell'array
boxTitle.innerHTML = arrayHeadlines[currentIndex];
boxArticle.innerHTML = arrayParagraphs[currentIndex];

// next button
const buttonNext = document.querySelector('.right-arrow');


buttonNext.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex > arrayHeadlines.length -1) {
        currentIndex = 0;
    }
    boxTitle.innerHTML = arrayHeadlines[currentIndex];
    boxArticle.innerHTML = arrayParagraphs[currentIndex];
    boxImages = document.querySelector('.box-images');

})

// pervious button
const prevButton = document.querySelector('.left-arrow');

prevButton.addEventListener('click', function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = arrayHeadlines.length -1
    }
    boxTitle.innerHTML = arrayHeadlines[currentIndex];
    boxArticle.innerHTML = arrayParagraphs[currentIndex];
    boxImages = document.querySelector('.box-images');
})
