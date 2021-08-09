const request = require("supertest");
const app = require("../../app");

describe("Launches API", () => {
  describe("Test GET /yelp ", () => {
    const query = {
      location: "SanJose",
      radius: 1000,
      term: "deli",
    };
    test("It should respond with 200 success", async () => {
      const response = await request(app)
        .get(
          `/yelp?term=${query.term}&location=${query.location}&radius=${query.radius}`
        )
        .expect("Content-Type", /json/)
        .expect(200);
    });

    test("It should respond with 400 failure missing required properties", async () => {
      const response = await request(app)
        .get(`/yelp?term=${query.term}&location=${query.location}`)
        .expect("Content-Type", /json/)
        .expect(400);
    });
  });
});
