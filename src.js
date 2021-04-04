
$(function(){
  $('.start').on('click', function() {
    var array = [
      {tate: 1, yoko: 1 },
      {tate: 1, yoko: 2 },
      {tate: 1, yoko: 3 },
      {tate: 1, yoko: 4 },
      {tate: 1, yoko: 5 },
      {tate: 2, yoko: 1 },
      {tate: 2, yoko: 2 },
      {tate: 2, yoko: 3 },
      {tate: 2, yoko: 4 },
      {tate: 2, yoko: 5 },
      {tate: 3, yoko: 1 },
      {tate: 3, yoko: 2 },
      {tate: 3, yoko: 3 },
      {tate: 3, yoko: 4 },
      {tate: 3, yoko: 5 },
      {tate: 4, yoko: 1 },
      {tate: 4, yoko: 2 },
      {tate: 4, yoko: 3 },
      {tate: 4, yoko: 4 },
      {tate: 4, yoko: 5 },
      {tate: 5, yoko: 1 },
      {tate: 5, yoko: 2 },
      {tate: 5, yoko: 3 },
      {tate: 5, yoko: 4 },
      {tate: 5, yoko: 5 },
    ];
  
    var senkou = []
    var koukou = []
    var dobon = []
    var index = Math.floor(Math.random() * array.length)
    dobon.push(array[index])
    array.splice(index, 1)
    console.log(array)

    for (let i = 0; i < 9; i++) {
      index = Math.floor(Math.random() * array.length)
      senkou.push(array[index])
      array.splice(index, 1)
    }
    console.log(array)
    for (let i = 0; i < 8; i++) {
      index = Math.floor(Math.random() * array.length)
      koukou.push(array[index])
      array.splice(index, 1)
    }
    console.log(array)
    senkou.forEach(function(elem, index) {
        $(`.column_${elem.tate}_${elem.yoko}`).css('background-color', 'blue');
    });
    koukou.forEach(function(elem, index) {
        $(`.column_${elem.tate}_${elem.yoko}`).css('background-color', 'red');
    });
    dobon.forEach(function(elem, index) {
      $(`.column_${elem.tate}_${elem.yoko}`).css('background-color', 'silver');
  });
  });

  $('.reset').on('click', function() {
    for (let tate = 1; tate < 6; tate++) {
      for (let yoko = 1; yoko < 6; yoko++) {
        $(`.column_${tate}_${yoko}`).css('background-color', 'white');
      }
    }
  })
});