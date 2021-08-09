const request = require("supertest");
const app = require("../../app");

describe("Launches API", () => {
  describe("Test GET /googleplaces ", () => {
    const query = {
      lat: 37.3382,
      lng: 121.8863,
      radius: 10,
      type: "school",
    };
    test("It should respond with 200 success", async () => {
      const response = await request(app)
        .get(
          `/googleplaces?lat=${query.lat}&lng=${query.lng}&radius=${query.radius}&type=${query.type}`
        )
        .expect("Content-Type", /json/)
        .expect(200);
    });

    test("It should respond with 400 failure missing required properties", async () => {
      const response = await request(app)
        .get(
          `/googleplaces?lat=${query.lat}&lng=${query.lng}&type=${query.type}`
        )
        .expect("Content-Type", /json/)
        .expect(400);
    });
  });
});
