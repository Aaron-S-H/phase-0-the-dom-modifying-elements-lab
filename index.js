const main = document.getElementById('main');

main.remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute('id', 'victory');

newHeader.innerHTML = "Aaron is the champion";

const body = document.querySelector('body');

document.body.append(newHeader);