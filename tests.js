QUnit.test("Test the getAreaCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});

QUnit.test("Test the getCOCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getCOCode(num);
    assert.deepEqual(result, "555", "Valid CO code test passed.");
});

QUnit.test("Test the getLCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getLCode(num);
    assert.deepEqual(result, "5555", "Valid L code test passed.");
});
