const { obterPessoas } = require('../obterpessoa.js');

QUnit.test("Teste: Verificar lista de pessoas", function (assert) {
  assert.deepEqual(obterPessoas(), ["Alice", "Bob", "Carol"], "As pessoas estão corretas");
});
