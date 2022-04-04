import * as UserController from '../../src/controllers/user.controller';
import * as UserService from '../../src/services/user.service';

describe('UserController.newUser',()=>{
    it('should have a newUser function',()=>{
        expect(typeof UserController.newUser).toBe('function');
    });
    it('should have a login function',()=>{
        expect(typeof UserController.login).toBe('function');
    });
});
describe('UserService.newUser',()=>{
    it('should have a newUser function',()=>{
        expect(typeof UserService.newUser).toBe('function');
    })
    it('should have a login function',()=>{
        expect(typeof UserService.login).toBe('function');
    });
});

describe()

