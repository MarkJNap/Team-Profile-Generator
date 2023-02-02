const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("Initialization creation", () => {
        it("Should create an object with a name, id and email", () => {
            const name = "Mark"
            const id = 13
            const email = "mark@test.com"

            const result = new Employee(name, id, email)

            expect(result.name).toEqual(name)
            expect(result.id).toEqual(id)
            expect(result.email).toEqual(email)
        })
    })
    describe("Initialization types", () => {
        it("Should create an object with a name as a string, id as a number and email as a string", () => {
            const name = "Mark"
            const id = 13
            const email = "mark@test.com"

            const result = new Employee(name, id, email)

            expect(result.name).toEqual(expect.any(String))
            expect(result.id).toEqual(expect.any(Number))
            expect(result.email).toEqual(expect.any(String))
        })
    })
    describe("getName", () => {
        it("Should return the name when the function is called", () => {
            const result = new Employee("Mark", 13, "mark@test.com")

            expect(result.getName()).toBe("Mark")
        })
    })
    describe("getId", () => {
        it("Should return the ID when the function is called", () => {
            const result = new Employee("Mark", 13, "mark@test.com")

            expect(result.getId()).toBe(13)
        })
    })
    describe("getEmail", () => {
        it("Should return the Email when the function is called", () => {
            const result = new Employee("Mark", 13, "mark@test.com")

            expect(result.getEmail()).toBe("mark@test.com")
        })
    })
    describe("getRole", () => {
        it("Should return the Role when the function is called", () => {
            const result = new Employee("Mark", 13, "mark@test.com")

            expect(result.getRole()).toBe("Employee")
        })
    })
})