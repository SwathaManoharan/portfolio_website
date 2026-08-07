const request = require("supertest");
const fs = require("fs");
const app = require("../src/index");

describe("Profile API", () => {
  it("should return default profile when config file does not exist", async () => {
    jest.spyOn(fs, "access").mockImplementation((p, mode, cb) => cb(new Error("ENOENT")));
    const res = await request(app).get("/api/profile");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("role");
    expect(res.body).toHaveProperty("skills");
    fs.access.mockRestore();
  });

  it("should return 500 when profile.json contains invalid JSON", async () => {
    jest.spyOn(fs, "access").mockImplementation((p, mode, cb) => cb(null));
    jest.spyOn(fs, "readFile").mockImplementation((p, enc, cb) => cb(null, "not-valid-json{{{"));
    const res = await request(app).get("/api/profile");
    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty("error");
    fs.access.mockRestore();
    fs.readFile.mockRestore();
  });

  it("should return profile data from config file when valid", async () => {
    const mockProfile = { name: "Test", role: "Engineer", skills: ["Docker"] };
    jest.spyOn(fs, "access").mockImplementation((p, mode, cb) => cb(null));
    jest.spyOn(fs, "readFile").mockImplementation((p, enc, cb) => cb(null, JSON.stringify(mockProfile)));
    const res = await request(app).get("/api/profile");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockProfile);
    fs.access.mockRestore();
    fs.readFile.mockRestore();
  });
});
