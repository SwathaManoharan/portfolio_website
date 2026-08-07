const request = require("supertest");
const app = require("../src/index");
const { version } = require("../package.json");

describe("Version API", () => {
  it("should return the app version", async () => {
    const res = await request(app).get("/version");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ version });
  });
});
