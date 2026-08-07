const request = require("supertest");
const app = require("../src/index");

describe("Root page", () => {
  it("should return 200 with HTML content", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Swatha M");
  });
});
