const validaEmail = require('../email.js');

//QUnit.module("MODULO DE TESTES 2:")


// Teste para um email válido
QUnit.test("Teste: Verificar se um email é válido", function(assert) {
  var emailValido = "exemplo@email.com";
  assert.ok(validaEmail(emailValido), "O email é válido");
});

// Teste para um email inválido
QUnit.test("Teste: Verificar se um email é inválido", function(assert) {
  var emailInvalido = "exemplo@";
  assert.notOk(validaEmail(emailInvalido), "O email é inválido");
});
