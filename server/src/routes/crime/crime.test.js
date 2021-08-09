const request = require("supertest");
const app = require("../../app");

const { getNationalData } = require("../../models/crime/crime.model");

describe("Launches API", () => {
  describe("Test GET /crime with a search query of State CA ", () => {
    const state = "CA";
    test("It should respond with 200 success", async () => {
      const response = await request(app)
        .get(`/crime?state=${state}`)
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });

  describe("Test GET /crime/national", () => {
    test("It should respond with 200 success", async () => {
      const response = await request(app)
        .get("/crime/national")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });
});
