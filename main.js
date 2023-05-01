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

const row2 = row.cloneNode(true);
keyboardKeys.append(row2);

const row3 = row.cloneNode(true);
keyboardKeys.append(row3);

const row4 = row.cloneNode(true);
keyboardKeys.append(row4);

const row5 = row.cloneNode(true);
keyboardKeys.append(row5);

// for (let i = 1; i <= 14; i ++) {
//   const key = document.createElement('div');
//   key.classList.add('key');

//   row.append(key);
// }

for (let i = 1; i <= 14; i ++) {
  const key2 = document.createElement('div');
  key2.classList.add('key');

  row2.append(key2);
}

for (let i = 1; i <= 14; i ++) {
  const key3 = document.createElement('div');
  key3.classList.add('key');

  row3.append(key3);
}

for (let i = 1; i <= 14; i ++) {
  const key4 = document.createElement('div');
  key4.classList.add('key');

  row4.append(key4);
}

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


