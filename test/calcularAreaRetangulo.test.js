const { calcularAreaRetangulo } = require('../calcularAreaRetangulo.js');

QUnit.test("Teste: Verificar área do retângulo", function (assert) {
  assert.strictEqual(calcularAreaRetangulo(3, 4), 12, "A área do retângulo está correta");
});
