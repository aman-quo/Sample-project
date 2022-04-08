import * as UserController from '../../src/controllers/user.controller';
import * as UserService from '../../src/services/user.service';
import * as UserModel from '../../src/models/user.model'
import httpMocks from 'node-mocks-http';
import * as testData from '../mock-data/user.json'


UserModel.create = jest.fn();

let req = httpMocks.createRequest();
let res = httpMocks.createResponse();
let next = null;
describe('UserController.newUser', () => {
    it('should have a newUser function', () => {
        expect(typeof UserController.newUser).toBe('function');
    });
    it('should have a login function', () => {
        expect(typeof UserController.login).toBe('function');
    });
    it('should call Service ', async () => {
        UserService.newUser = jest.fn().mockResolvedValue(testData.register);
        let responseData = {
            code: 201,
            data: testData.register,
            message: 'User created successfully'
        }
        await UserController.newUser(req, res, next);
        expect(res._getStatusCode()).toEqual(201);
        expect(res._getData()).toEqual(JSON.stringify(responseData))
    })
});
describe('UserService.newUser', () => {
    it('should have a newUser function', () => {
        expect(typeof UserService.newUser).toBe('function');
    })
    it('should have a login function', () => {
        expect(typeof UserService.login).toBe('function');
    });
    it('should check Model', async () => {
        UserModel.findOne = jest.fn().mockResolvedValue(testData.register.email)
        const body = {
            phoneNo: '7418529635',
            email: 'adkbdak123@gmail.com',
            password: 'Abcd123@'
        }
        await UserService.newUser(body);
        // expect(UserService.newUser(body))
        // console.log(await UserService.newUser(body));
        expect(res._getData()).toEqual(body)
    })
});