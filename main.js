const bodyMain = document.getElementsByTagName('body')[0];
bodyMain.classList.add('body');

const main = document.createElement('main');
main.classList.add('container');
document.body.prepend(main);

const wrapp = document.createElement('div');
wrapp.classList.add('keyboard_wrapp');
document.querySelector('main').append(wrapp);

const keys = document.createElement('div');
keys.classList.add('keyboard_keys');
document.querySelector('div').append(keys);
