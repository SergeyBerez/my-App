// вешаем на кнопку событие
let btn = document.querySelector('button');
btn.onclick = FnInsert;
//плучаем данные с формы select вешаем обработчик события
let select = document.querySelector('#select');
select.onchange = selectFn;
let vlSelect;
// запоминаем значение во нешнюю переменную что бы функция могла считать значение
function selectFn() {
  vlSelect = select.value;
  console.log(vlSelect);
}

//функцию которая создает элементы в качестве аргумента принимает строковый параметр
function criateElem(mes) {
  let resSpan = document.createElement('span');
  resSpan.classList.add('err');
  resSpan.textContent = mes;
  // создаем див
  let newdiv = document.createElement('div');
  newdiv.textContent = 'создали див';
  newdiv.classList.add('overlay');
  //вставляем span в див
  newdiv.insertAdjacentElement('afterbegin', resSpan);
  return newdiv;
}

function FnInsert() {
  let prop = vlSelect; //получаем данные с селекта
  let selector = document.querySelector('input').value; //получаем данные с инпута
  if (selector == '') {
    console.log(selector);
    console.log(1111);
    document.body.append(criateElem('вы не ввели селектор '));
    document.querySelector('.overlay').addEventListener('click', function(e) {
      document.querySelector('.overlay').remove();
    });
  } else if (document.querySelector(selector) == null) {
    document.body.append(criateElem('вы ввели некорректный селектор '));
    document.querySelector('.overlay').addEventListener('click', function(e) {
      document.querySelector('.overlay').remove();
    });
  } else if (prop == undefined) {
    document.body.append(criateElem('вы не выбрали свойство '));
    document.querySelector('.overlay').addEventListener('click', function(e) {
      document.querySelector('.overlay').remove();
    });
  } else if (prop == 'undefined') {
    document.body.append(criateElem('вы не выбрали свойство '));
    document.querySelector('.overlay').addEventListener('click', function(e) {
      document.querySelector('.overlay').remove();
    });
  } else {
    document.querySelector(selector).style = prop;
  }
  // try {
  //   if (document.querySelector(selector) && prop) {
  //     document.querySelector(selector).style = prop;
  //   } else {
  //     вставляем элемент в боди полсе начала вторым аргументом передаем нашу
  //     самописную функцию criateElem(mes)
  //     document.body.append(
  //       criateElem('вы ввели некорректный селектор либо не выбрали свойство'),
  //     );
  //     document.querySelector('.overlay').addEventListener('click', function(e) {
  //       document.querySelector('.overlay').remove();
  //     });
  //     console.log(' try');
  //   }
  // } catch (e) {
  //   document.body.append(criateElem('поле пустое введите селектор'));
  //   document.querySelector('.overlay').addEventListener('click', function(e) {
  //     document.querySelector('.overlay').remove();
  //     console.log(1);
  //   });
  //   console.log('catch');
  // }
}
  // игра крестики нолики

  let i = 2;
  let divs = document.querySelectorAll('.box');
  console.log(divs);
  let cont = document.querySelector('.cont');
  cont.addEventListener('click', function(e) {
    if (e.target.classList.contains('box') && i % 2 == 1) {
      e.target.textContent = 'X';
    } else if (e.target.classList.contains('box') && i % 2 == 0) {
      e.target.textContent = 'O';
    }
    i++;

    repair();
  });

  function repair() {
    let arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < divs.length; i++) {
      if (
        divs[arr[i][0]].innerHTML == 'X' &&
        divs[arr[i][1]].innerHTML == 'X' &&
        divs[arr[i][2]].innerHTML == 'X'
      ) {
        alert('выйграл Х');
        window.location.reload();
      } else if (
        divs[arr[i][0]].innerHTML == 'O' &&
        divs[arr[i][1]].innerHTML == 'O' &&
        divs[arr[i][2]].innerHTML == 'O'
      ) {
        alert('выйграл O');
        window.location.reload();
      }
    }
  }

