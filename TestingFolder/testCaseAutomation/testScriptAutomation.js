const request = require("supertest");
const { expect } = require("chai");
const baseUrl = require("../globalVariable/baseUrl");

const url = `${baseUrl}`;
//test suites
describe("Testing API restful", function () {
  // Test case 1 GET
  it("Test GET", async function () {
    const response = await request(url).get("/api/users?page=2");
    //assertation / verifikasi
    expect(response.status).to.equal(200);
    console.log(response.body);
  });

  //test case 2 POST
  it("Test POST", async function () {
    const response = await request(url).post("/api/users").send({
        "name": "Maulana",
        "job": "Supervisor",
    });

    //assertation / verifikasi
    expect(response.body.name).to.equal("Maulana");

    console.log(response.body);
  });  
});