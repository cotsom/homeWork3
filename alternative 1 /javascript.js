var i = 1;
pls:
  for (var i; i <= 100; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0){
      	continue pls;
      }
    }

    alert(i); 
  }

  /* пытался сделать с помощью while, но почему-то код нижу доходит только до 3

  var i = 2;
pls:
  while (i <= 100) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0){
      	continue pls;
      }
    }

    alert(i);
    i++ 
  } 
*/