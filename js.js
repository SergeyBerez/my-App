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
  if (selector == '' ) {
    console.log(selector);
    console.log(1111);
    document.body.append(criateElem('вы не ввели селектор '));
    document.querySelector('.overlay').addEventListener('click', function(e) {
      document.querySelector('.overlay').remove();
    });

  } else if(document.querySelector(selector)==null){
    document.body.append(criateElem('вы ввели некорректный селектор '));
    document.querySelector('.overlay').addEventListener('click', function(e) {
      document.querySelector('.overlay').remove();
    });
  }
  else if (prop == undefined) {
    document.body.append(criateElem('вы не выбрали свойство '));
    document.querySelector('.overlay').addEventListener('click', function(e) {
      document.querySelector('.overlay').remove();
    });
  }
  else if (prop == 'undefined') {
    document.body.append(criateElem('вы не выбрали свойство '));
    document.querySelector('.overlay').addEventListener('click', function(e) {
      document.querySelector('.overlay').remove();
    });
  }
   else {
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
