const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("Initialization", () => {
        it("Should create a manager object with a name, id, email and a office number", () => {
            const name = "Marc"
            const id = 43
            const email = "marc@test.com"
            const officeNumber = 1

            const result = new Manager(name, id, email, officeNumber)

            expect(result.name).toEqual(name)
            expect(result.id).toEqual(id)
            expect(result.email).toEqual(email)
            expect(result.officeNumber).toEqual(officeNumber)
        })
    })
    describe("Office Number type", () => {
        it("Should create office Number variable as a number", () => {
            const result = new Manager("Mack", 33, "mack@test.com", 1)

            expect(result.officeNumber).toEqual((expect.any(Number)))
        })
    })
    describe("getRole", () => {
        it("Should return the Role when the function is called", () => {
            const result = new Manager("Mack", 33, "mack@test.com", 1)

            expect(result.getRole()).toBe("Manager")
        })
    })
})
