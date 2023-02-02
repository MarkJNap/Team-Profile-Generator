const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("Initialization", () => {
        it("Should create an intern object with a name, id, email and a school", () => {
            const name = "Mack"
            const id = 33
            const email = "mack@test.com"
            const school = "UWA"

            const result = new Intern(name, id, email, school)

            expect(result.name).toEqual(name)
            expect(result.id).toEqual(id)
            expect(result.email).toEqual(email)
            expect(result.school).toEqual(school)
        })
    })
    describe("School type", () => {
        it("Should create school variable as a string", () => {
            const result = new Intern("Mack", 33, "mack@test.com", "UWA")

            expect(result.school).toEqual((expect.any(String)))
        })
    })
    describe("getSchool", () => {
        it("Should return the github when the function is called", () => {
            const result = new Intern("Mack", 33, "mack@test.com", "UWA")

            expect(result.getSchool()).toBe("UWA")
        })
    })
    describe("getRole", () => {
        it("Should return the Role when the function is called", () => {
            const result = new Intern("Mack", 33, "mack@test.com", "UWA")

            expect(result.getRole()).toBe("Intern")
        })
    })
})