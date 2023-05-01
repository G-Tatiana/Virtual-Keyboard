const bodyMain = document.getElementsByTagName('body')[0];
bodyMain.classList.add('body');

const main = document.createElement('main');
main.classList.add('container');
document.body.prepend(main);

const wrapp = document.createElement('div');
wrapp.classList.add('keyboard_wrapp');
document.querySelector('main').append(wrapp);

const keyboardKeys = document.createElement('div');
keyboardKeys.classList.add('keyboard_keys');
wrapp.append(keyboardKeys);

const row = document.createElement('div');
row.classList.add('row');
keyboardKeys.append(row);

const row2 = document.createElement('div');
row2.classList.add('row2');
keyboardKeys.append(row2);

const row3 = document.createElement('div');
row3.classList.add('row3');
keyboardKeys.append(row3);

const row4 = document.createElement('div');
row4.classList.add('row4');
keyboardKeys.append(row4);

const row5 = row.cloneNode(true);
keyboardKeys.append(row5);

for (let i = 1; i <= 14; i ++) {
  const key5 = document.createElement('div');
  key5.classList.add('key');

  row5.append(key5);
}

ROW1.forEach(function(item){
    let row1 = document.createElement('div');
    row1.classList.add('key');
    row1.innerHTML = `
      <div class="symbol__left">${item[0]}</div>
      <div class="symbol__right">${item[1]}</div>
    `
    document.querySelector('.row').append(row1)
})

const cols = row.querySelectorAll('.key');
const first = cols[0];
const last = cols[cols.length - 1];

last.className = 'key backspace_key';

// const rowsList = keyboardKeys.querySelectorAll('.row');
// const firstRow = rowsList[0];
// const secondRow = rowsList[rowsList.length - 4];


const arrRowSecond = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '&bsol;', 'Del'];
const secondRow = arrRowSecond.map(i=>`<div class="key">${i}</div>`).join('');
document.querySelector('.row2').innerHTML = secondRow;

const colsRowSecond = row2.querySelectorAll('.key');
const firstElementOfRowSecond = colsRowSecond[0];
const lastElementOfRowSecond = colsRowSecond[colsRowSecond.length - 1];

firstElementOfRowSecond.className = 'key tab_key';
lastElementOfRowSecond.className = 'key key_del';


const arrRowThird = ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '&Prime;', 'Enter'];
const thirdRow = arrRowThird.map(i=>`<div class="key">${i}</div>`).join('');
document.querySelector('.row3').innerHTML = thirdRow;

const colsRowThird = row3.querySelectorAll('.key');
const firstElementOfRowThird = colsRowThird[0];
const lastElementOfRowThird = colsRowThird[colsRowThird.length - 1];

firstElementOfRowThird.className = 'key caps_lock_key';
lastElementOfRowThird.className = 'key enter_key';

const arrRowFourth = ['Shift', '&bsol;', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '&Prime;', '&sol;', 'ᐃ', 'Shift'];
const fourthRow = arrRowFourth.map(i=>`<div class="key">${i}</div>`).join('');
document.querySelector('.row4').innerHTML = fourthRow;

const colsRowFourth = row4.querySelectorAll('.key');
const firstElementOfRowFourth = colsRowFourth[0];
const lastElementOfRowFourth = colsRowFourth[colsRowFourth.length - 1];

firstElementOfRowFourth.className = 'key shift_left';
lastElementOfRowFourth.className = 'key shift_right';

