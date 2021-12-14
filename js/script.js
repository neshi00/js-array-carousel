// definisco liste array (titoli e paragrafi)
const arrayHeadlines = ['Titolo1', 'Titolo2', 'Titolo3'];
const arrayParagraphs = ['paragrafo1', 'paragrafo2', 'paragrafo3'];

let currentIndex = 0;

// aggancio variabili a DOM
const boxTitle = document.querySelector('.box-title');
const boxArticle = document.querySelector('.box-text');

const buttonNext = document.querySelector('.right-arrow');

// stampo nel DOM in relazione allo specifico elemento dell'array
boxTitle.innerHTML = arrayHeadlines[currentIndex];
boxArticle.innerHTML = arrayParagraphs[currentIndex];

// next button
buttonNext.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex > arrayHeadlines.length -1) {
        currentIndex = 0;
    }
    boxTitle.innerHTML = arrayHeadlines[currentIndex];
    boxArticle.innerHTML = arrayParagraphs[currentIndex];
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
})
