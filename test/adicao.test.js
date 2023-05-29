const { adicionar } = require('../adicao.js');

//QUnit.module("MODULO DE TESTES 1:")


QUnit.test("Teste: Verificar adição", function (assert) {
  assert.equal(adicionar(2, 2), 4, "A adição está correta");
});