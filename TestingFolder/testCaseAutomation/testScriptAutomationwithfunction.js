const { deleteMethode } = require("../apiServer/apiObjects");

//test suites
describe("Testing API restful", function () {
    // Test case 1 GET
    it("Test DELETE from function", async function () {
        deleteMethode();
    });
});