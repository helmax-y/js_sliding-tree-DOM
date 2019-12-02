'use strict';

document.querySelectorAll('li').forEach(li => {
  if (li.children.length) {
    const span = document.createElement('span');

    span.classList.add('list-name');
    li.prepend(span);
    span.append(span.nextSibling);
  }
})

const list = document.querySelector('.tree');

list.addEventListener('click', event => {
  if (event.target.tagName === 'SPAN') {
    let ulClasses = event.target.nextSibling.classList;

    if (ulClasses.contains('hide')) {
      ulClasses.remove('hide');
    } else {
      ulClasses.add('hide');
    }
  }
});
