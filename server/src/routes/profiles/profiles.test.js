const request = require("supertest");
const app = "http://localhost:8000";

describe("Launches API", () => {
  //testing GET reqeust for /profiels endpoint
  describe("Test GET /profiles with a search query of a user ", () => {
    const user = "m@gmail.com";
    test("It should respond with 200 success", async () => {
      const response = await request(app)
        .get(`/profiles?email=${user}`)
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });

  describe("Test POST for /profiles", () => {
    //testing POST request the same endpoint
    test("It should respond with 201 created", async () => {
      const response = await request(app)
        .post("/profiles")
        .send({ email: "test@gmail.com" })
        .expect("Content-Type", /json/)
        .expect(201);
    });
  });

  describe("Test POST for /profiles & /profiles/favorites", () => {
    //testing POST request at profiles/favorites endpoint
    const profile = {
      email: "m@gmail.com",
      location: "Hawaii",
      city: "honolulu",
    };
    test("It should respond with 201 created", async () => {
      const response = await request(app)
        .post("/profiles/favorites")
        .send(profile)
        .expect("Content-Type", /json/)
        .expect(201);
    });

    test("It should catch missing required properties", async () => {
      const response = await request(app)
        .post("/profiles/favorites")
        .send({})
        .expect("Content-Type", /json/)
        .expect(400);
    });
  });
});
