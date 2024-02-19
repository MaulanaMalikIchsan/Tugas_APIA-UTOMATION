const request = require("supertest");
const { expect } = require("chai");
const baseUrl = require("../globalVariable/baseUrl");

async function deleteMethode (id) {
    const response = await request(url).delete(`/api/users/${id}`);
    //assertation / verification
    expect(response.body.message).to.equal(`object with id = ${id} has been deleted.`)
    expect(response.body.error).to.equal(`object with id = ${id} was not found`)
    console.log(response);
}

module.exports = { deleteMethode }