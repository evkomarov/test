const card = document.getElementsByClassName('card-inside');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const descr1 = document.getElementById('descr1');
const descr2 = document.getElementById('descr2');
function cardSelection(num) {
    for (let i = 0; i < card.length; i++) {
        card[i].classList.add('selected')
    }
    document.getElementById('dot' + num).classList.toggle('selected');
    document.getElementById('card' + num).classList.toggle('selected');

    if (card1.classList.contains('selected')) {
        descr1.innerHTML = 'Печень утки разварная с артишоками.';
        console.log(card1.classList);
    } else {
        descr1.innerHTML = `Чего сидишь? Порадуй котэ,&nbsp;<button class="btn" onclick="cardSelection(1)">купи</button>`
    };

    if (card2.classList.contains('selected')) {
        descr2.innerHTML = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
    } else {
        descr2.innerHTML = `Чего сидишь? Порадуй котэ,&nbsp;<button class="btn" onclick="cardSelection(2)">купи</button>`
    };
}