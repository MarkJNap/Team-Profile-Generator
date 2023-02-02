const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Should create an engineer object with a name, id, email and a github", () => {
            const name = "Matt"
            const id = 23
            const email = "matt@test.com"
            const github = "MattJNap"

            const result = new Engineer(name, id, email, github)

            expect(result.name).toEqual(name)
            expect(result.id).toEqual(id)
            expect(result.email).toEqual(email)
            expect(result.github).toEqual(github)
        })
    })
    describe("github type", () => {
        it("Should create github variable as a string", () => {
            const result = new Engineer("Matt", 23, "matt@test.com", "MattJNap")

            expect(result.github).toEqual((expect.any(String)))
        })
    })
    describe("getGithub", () => {
        it("Should return the github when the function is called", () => {
            const result = new Engineer("Matt", 23, "matt@test.com", "MattJNap")

            expect(result.getGithub()).toBe("MattJNap")
        })
    })
    describe("getRole", () => {
        it("Should return the Role when the function is called", () => {
            const result = new Engineer("Matt", 23, "matt@test.com", "MattJNap")

            expect(result.getRole()).toBe("Engineer")
        })
    })
})