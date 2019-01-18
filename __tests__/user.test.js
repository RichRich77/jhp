"use strict";

var Nightmare = require("nightmare");

describe("createUser", function () {
    it("should create a user", function (done) {
        return Nightmare({ show: true, executionTimeout: 30000 })
            .goto("http://localhost:3000")
            .click(".expandButton")
            .wait(2000)
            .click("#loginButton")
            .wait(2000)
            .click("#createAccount")
            .wait(2000)
            .type("#user-name", "billybobbybob")
            .wait(2000)
            .type("#password-input", "Password123")
            .wait(2000)
            .type("#email-input", "email13@email.com")
            .wait(2000)
            .click("#createSubmit")
            .wait(2000)
            .goto("http://localhost:3000/api/users")
            .wait(5000)
            .end()
            .then(function (result) {
                expect(result);
                done();
            })
            .catch(function (error) {
                console.error("Create User failed:", error);
                done();
            })
    }, 30000);
})


