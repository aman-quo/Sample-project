import * as ContactController from '../../src/controllers/contact.controller';
import * as ContactService from '../../src/services/contact.service';
import * as ContactModel from '../../src/models/contact.model';
describe('UserController.newUser',()=>{
    it('should have a createContact function',()=>{
        expect(typeof ContactController.createContact).toBe('function');
    })
})
describe('ContactService.addProfile',()=>{
    it('should have a addProfile function',()=>{
        expect(typeof ContactService.createContact).toBe('function');
    })
})
describe('ProfileModel.newUser',()=>{
    it('should have create and frind Profile collection',()=>{
        expect(ContactModel.findOneAndUpdate)
    })
})