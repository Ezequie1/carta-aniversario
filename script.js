document.addEventListener('DOMContentLoaded', function() {
    var stream = document.querySelector('.gallery__stream');
    var items = document.querySelectorAll('.gallery__item');
    
    var prev = document.querySelector('.gallery__prev');
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.gallery__item');
    });
    
    var next = document.querySelector('.gallery__next');
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.gallery__item');
    });
  });

  const miliseg = document.querySelector('.milissegundos');
  const tempo = document.querySelector('.horas');
  const anos = document.querySelector('.ano')
  const mes = document.querySelector('.mes')
  const dias = document.querySelector('.dias')


  tempo.innerHTML = new Date().toLocaleTimeString();

  let miliNum = 0
  let INTERVALO

  var data = new Date();

  const d1  = data.getFullYear() + '-' + String(data.getMonth() ).padStart(2, '0') + '-11';
  console.log(d1)
  const d2  = data.getFullYear() + '-' + String(data.getMonth() + 1).padStart(2, '0') + '-' + String(data.getDate()).padStart(2, '0');

  console.log(d2)

  
  const diffInMs   = new Date(d2) - new Date(d1)

  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  console.log(diffInDays)

  if(diffInDays > 365){
    anos.innerHTML = 1;
  }

  const m1 = '2022-09-11';
  const m2  = data.getFullYear() + '-' + String(data.getMonth() + 1).padStart(2, '0') + '-' + String(data.getDate()).padStart(2, '0');

  var data1 = new Date(m1); 
  var data2 = new Date(new Date(m2));
  var diferencaMeses = (data2.getFullYear() - data1.getFullYear())*12 + (data2.getMonth() - data1.getMonth());



  dias.innerHTML = diffInDays;
  mes.innerHTML = diferencaMeses;

  iniciar();

  function milissegundos() {
    miliNum++
    if (miliNum < 10) {
      miliseg.innerHTML = '0' + miliNum
    } else {
      miliseg.innerHTML = miliNum
    }
  
    if (miliNum == 99) {
      miliNum = 0
      segundos()
    }
  }

  function segundos() {
    let horas =  new Date().toLocaleTimeString();
    tempo.innerHTML = horas;
  }

  function iniciar() {
    clearInterval(INTERVALO)
    INTERVALO = setInterval(() => {
      milissegundos()
    }, 10)
  }
  