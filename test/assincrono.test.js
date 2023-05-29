QUnit.test("Teste: Async", function (assert){
  //assert.expect(2)
  var done = assert.async(3); //quantidade de callback


  setTimeout(function () {
    assert.ok(true, "Callback 1");
    done (); // 1 - sinalizar que  callback terminaram
  }, 1000)

  setTimeout(function () {
    assert.ok(true, "Callback 2");
    done (); // 2
  }, 1000)


  setTimeout(function () {
    assert.ok(true, "Callback 3"); // Colocamos false para testarmos o async
    done (); // 3
  }, 1000)


})