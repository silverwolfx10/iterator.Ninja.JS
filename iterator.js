/**
 * $iterator
 * 
 * Facilita a interacao com um array, permitindo o avancar e retroceder
 * uma colecao de dados
 * 
 * @module $iterator
 * @author Cleber de Moraes Gonçalves <cleber.programmer>
 * @example
 * 
 *        var i = $iterator([1, 2, 3]);
 * 
 *        while (i.hasNext()) {
 *          console.log(i.next());
 *        }
 *
 */
Ninja.module('$iterator', ['$slice'], function ($slice) {
  
  /**
   * Facilita a interacao com um array
   * 
   * @public
   * @method Iterator
   * @param {Array} data Colecao de dados
   * @return {Object} Objeto iterator que permite avancar e retroceder uma colecao de dados
   * @example
   * 
   *        var i = $iterator([1, 2, 3]);
   * 
   */
  function Iterator(data) {
    
    /**
     * Torna o Iterator auto instanciavel, evitando a necessidade do 'new' toda
     * vez que for utilizar o iterator
     */
    if (!(this instanceof arguments.callee)) {
      return new arguments.callee(data);
    }
    
    var index = -1;

    /**
     * Utilizo o contexto da funcao no push, tornando o
     * iterato em um array
     */
    [].push.apply(this, $slice(data));
    
    /**
     * Retorna o elemento corrente
     * 
     * @public
     * @method current
     * @return {Array|Boolean|Date|Funcation|Null|Object|String|Undefined} Elemento corrente
     * @example
     * 
     *        i.current();
     * 
     */
    this.current = function () {
      return this[index];
    };
    
    /**
     * Retorna o index do elemento corrente
     * 
     * @public
     * @method getIndex
     * @return {Number} Index corrente
     * @example
     * 
     *        i.getIndex();
     * 
     */
    this.getIndex = function () {
      return index;
    };

    /**
     * Verifica se o iterator pode percorre um intem
     * para frente
     * 
     * @public
     * @method hasNext
     * @return {Boolean} Confirmacao
     * @example
     * 
     *        i.hasNext();
     * 
     */
    this.hasNext = function () {
      return (index + 1) < this.length;
    };

    /**
     * Verifica se o iterator pode percorrer um item para traz
     * 
     * @public
     * @method hasPrev
     * @return {Boolean} Confirmacao
     * @example
     * 
     *        i.hasPrev();
     * 
     */
    this.hasPrev = function () {
      return (index - 1) > -1;
    };
    
    /**
     * Confirma se é o primeiro elemento do array
     * 
     * @public
     * @method isFirst
     * @return {Boolean} Confirmacao
     * @example
     * 
     *        i.isFirst();
     * 
     */
    this.isFirst = function () {
      return !this.hasPrev();
    };
    
    /**
     * Confirma se é o ultimo elemento do array
     * 
     * @public
     * @method isLast
     * @return {Boolean} Confirmacao
     * @example
     * 
     *        i.isLast();
     * 
     */
    this.isLast = function () {
      return !this.hasNext();
    };

    /**
     * Percorre um elemento para frente e retorna o mesmo
     * 
     * @publci
     * @method next
     * @return {Array|Boolean|Date|Funcation|Null|Object|String|Undefined} Proximo elemento
     * @example
     * 
     *        i.next();
     * 
     */
    this.next = function () {
      return this[index += 1];
    };

    /**
     * Percorre um elemtno para traz e retorna
     * o mesmo
     * 
     * @puclic
     * @method prev
     * @return {Array|Boolean|Date|Funcation|Null|Object|String|Undefined} Elemento anterior
     * @exmaple
     * 
     *        i.prev();
     * 
     */
    this.prev = function () {
      return this[index -= 1];
    };

    /**
     * Reinicia a interacao do array
     * 
     * @public
     * @method rewind
     * @return {Number} Retorna -1
     * @example
     * 
     *        i.rewind();
     *
     */
    this.rewind = function () {
      return index = -1;
    };

  }
  
  /**
   * Revelacao do servico $iterator, encapsulando a visibilidade das funcoes
   * privadas
   */
  return Iterator;
  
});
