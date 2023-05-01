const bodyMain = document.getElementsByTagName('body')[0];
bodyMain.classList.add('body');

const main = document.createElement('main');
main.classList.add('container');
document.body.prepend(main);

const wrapp = document.createElement('div');
wrapp.classList.add('keyboard_wrapp');
document.querySelector('main').append(wrapp);

const text = document.createElement('input');
text.classList.add('text');
text.setAttribute('type', 'text')
document.querySelector('.keyboard_wrapp').after(text);

const osinfo = document.createElement('div');
osinfo.classList.add('info');
osinfo.innerHTML = "Клавиатура создана в операционной системе Windows";
document.querySelector('.keyboard_wrapp').after(osinfo);

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

const row5 = document.createElement('div');
row5.classList.add('row5');
keyboardKeys.append(row5);

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

const arrRowFifth = ['Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', 'ᐊ', 'ᐁ', 'ᐅ'];
const fifthRow = arrRowFifth.map(i=>`<div class="key">${i}</div>`).join('');
document.querySelector('.row5').innerHTML = fifthRow;

const colsRowFifth = row5.querySelectorAll('.key');
const firstElementOfRowFifth = colsRowFifth[0];
const secondElementOfRowFifth = colsRowFifth[colsRowFifth.length - 8];
const thirdElementOfRowFifth = colsRowFifth[colsRowFifth.length - 7];
const fourthElementOfRowFifth = colsRowFifth[colsRowFifth.length - 6];
const fifthElementOfRowFifth = colsRowFifth[colsRowFifth.length - 5];
const sixElementOfRowFifth = colsRowFifth[colsRowFifth.length - 4];

firstElementOfRowFifth.className = 'key ctrl_key ctrl_left';
secondElementOfRowFifth.className = 'key win_key';
thirdElementOfRowFifth.className = 'key alt_key alt_left';
fourthElementOfRowFifth.className = 'key space_key';
fifthElementOfRowFifth.className = 'key alt_key alt_right';
sixElementOfRowFifth.className = 'key ctrl_key ctrl_right';