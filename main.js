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
