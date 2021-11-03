import app from './app'
import request from "supertest";
const req = request(app);

jest.useFakeTimers();

// jest.mock('./alibaba.ts', () => jest.fn());
// jest.mock('./alibaba', () => jest.fn());
// import alibaba from "./alibaba";

// jest.mock('knex', () => jest.fn());
// import knex from "knex";




class CognitoIdentityServiceProviderClass {
    UserAttributes = [
        { Name: "sub", Value: "test_sub" },
        { Name: "phone_number", Value: "+380932364350" },
        { Name: "phone_number_verified", Value: "true" },
        { Name: "email_verified", Value: "true" },
        { Name: "email", Value: "fdsf@ttt.com" },
    ];
    PaginationToken = "pagination_token_test";
    Users = [ { Username: "test_user", Attributes: this.UserAttributes } ];
    User = {Attributes: null};
    constructor(params) {}
    adminDisableUser(params) {return this;}
    adminCreateUser(params) {
        this.User.Attributes = params.UserAttributes;
        return this;
    }
    adminGetUser(params) {return this;}
    adminEnableUser(params) {return this;}
    adminDeleteUser(params) {return this;}
    adminUpdateUserAttributes(params) {return this;}
    listUsers(params, params2, params3, params4) {return this;}
    promise() { return Promise.resolve(this); }
}


const fff = new CognitoIdentityServiceProviderClass({});
const res1 = fff.listUsers({}, {}, {}, {});
console.log("res1", res1)

const fff2 = new CognitoIdentityServiceProviderClass({});
jest.spyOn(CognitoIdentityServiceProviderClass.prototype, 'listUsers').mockImplementation(() => 'Hello');
fff2

// describe("first", () => {
//     it('first', (done) => {
//         // @ts-ignore
//         alibaba.mockImplementation(() => {
//             return {ddd: "first"}
//         })
//
//         req
//             .get("/first")
//             .end(function (err, res) {
//                 if (err) return done(err);
//                 expect(res.body).toMatchObject({ddd: "first"})
//                 done()
//             });
//     });
// })
//
// describe("second", () => {
//     it('second', (done) => {
//         // @ts-ignore
//         alibaba.mockImplementation(() => {
//             console.log("second!!!")
//             return {ddd: "second"}
//         })
//
//         req
//             .get("/second")
//             .end(function (err, res) {
//                 if (err) return done(err);
//                 expect(res.body).toMatchObject({ddd: "second"})
//                 done()
//             });
//     });
// })
//
//
// describe("third", () => {
//     it('third', (done) => {
//         // @ts-ignore
//         alibaba.mockImplementation(() => {
//             return {ddd: "third"}
//         })
//
//         req
//             .get("/third")
//             .end(function (err, res) {
//                 if (err) return done(err);
//                 expect(res.body).toMatchObject({ddd: "third"})
//                 done()
//             });
//     });
// })



