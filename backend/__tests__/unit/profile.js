import * as ProfileController from '../../src/controllers/profile.controller';
import * as ProfileService from '../../src/services/profile.service';
import * as ProfileModel from '../../src/models/profile.model'
describe('ProfileController.addProfile',()=>{
    it('should have a addProfile function',()=>{
        expect(typeof ProfileController.addProfile).toBe('function');
    })
})
describe('ProfileService.addProfile',()=>{
    it('should have a addProfile function',()=>{
        expect(typeof ProfileService.addProfile).toBe('function');
    })
})
describe('ProfileModel.newUser',()=>{
    it('should have create and frind Profile collection',()=>{
        expect(ProfileModel.create);
        expect(ProfileModel.findOne)
    })
})