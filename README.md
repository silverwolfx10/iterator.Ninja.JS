### $iterator

Facilita a interacao com um array, permitindo o avancar e retroceder uma colecao de dados

```javascript
this.Ninja(['$iterator'], function ($iterator) {
  
  var i = $iterator([1, 2, 3, 4, 5]);
  
  while(i.hasNext()) {
    console.log(i.next());
  }
  
});
```
