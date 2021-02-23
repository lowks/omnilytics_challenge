const app = require("../app.js");
const chai = require("chai");
const request = require("supertest");
const expect = chai.expect;

describe("Generate file with random objects", function () {
  let filename;

  it("should return successful response", function (done) {
    request(app)
      .get("/api/generate")
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(201);
        done();
      });
  });

  it("should return correct response body", function (done) {
    request(app)
      .get("/api/generate")
      .end(function (err, res) {
        const body = JSON.parse(res.text);
        expect(body).to.have.property("success", true);
        expect(body).to.have.property("body");
        const data = body.body;
        filename = data.filename;
        expect(data).to.have.property("filename");
        expect(data).to.have.property("downloadLink");
        done();
      });
  });

  it("should return report stats", function (done) {
    request(app)
      .get(`/api/report/${filename}`)
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(200);
        const body = JSON.parse(res.text);
        expect(body).to.have.property("success", true);
        expect(body).to.have.property("body");
        const data = body.body;
        expect(data).to.have.property("alphabeticalCount");
        expect(data).to.have.property("alphanumericCount");
        expect(data).to.have.property("floatCount");
        expect(data).to.have.property("intCount");
        done();
      });
  });

  it("should successfully download the randomly generated file", function (done) {
    request(app)
      .get(`/api/download/${filename}`)
      .end(function (err, res) {
        expect(res.statusCode).to.be.equal(200);
        expect(res.text).to.be.ok;
        done();
      });
  });
  
  afterEach(() => {
   cleanup()
  });
});
