import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../src/index';


describe('User APIs Test', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => { });
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  });

  describe('POST /users', () => {
    it('given registration details when proper should save in DB', (done) => {
      const register = {
        phoneNo: '8002695708',
        email: 'mkaubr007@gmail.com',
        password: 'Msingh123@'
      };
      request(app)
        .post('/api/v1/users/register')
        .send(register)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(201);
          done();
        });
    });
    it('given registration details when not proper should save in DB', (done) => {
      const register = {
        email: 'mkaubr007@gmail.com',
        password: 'Msingh123@'
      };
     
      request(app)
        .post('/api/v1/users/register')
        .send(register)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(500);
          done();
        });
    });
  });
  describe('POST /users', () => {
    it('given login details when proper should login in DB', (done) => {
      const register = {
        email: 'mkaubr007@gmail.com',
        password: 'Msingh123@'
      };
      request(app)
        .post('/api/v1/users/login')
        .send(register)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          done();
        });
    });
    it('given login details when not proper should login in DB', (done) => {
      const register = {
        email: 'mkaubr007@gmail.com',
        password: 'Msingh123'
      };
      request(app)
        .post('/api/v1/users/login')
        .send(register)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(500);
          done();
        });
    });
  });
  describe('POST /profiles', () => {
    it('given profile details when proper should save in DB', (done) => {
      const profile = {
        name: 'Manish',
        DOB: '01/04/1996',
        interests: 'travelling',
        location: 'India',
      };
      request(app)
        .post('/api/v1/profiles/profile')
        .set('Bearer '+ userAuth)
        .send(profile)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(201);
          done();
        });
    });
    it('given profile details when not proper should save in DB', (done) => {
      const bearerToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1rYXViODAwN0BnbWFpbC5jb20iLCJpZCI6IjYyMjcwMzM1ZDgwMTU1MDFkNGQxNjBlMCIsInBob25lTm8iOjc4OTQ1NjEyMzIsImlhdCI6MTY0NjczNjcwMX0.QmwYyAiDAWH1qY-Uv2QBDmaujfPOLSLW7tjf8je2F_0';
      const profile = {
        name: 'Manish',
        DOB: '01/04/1996',
        interests: 'travelling',
        location: 'India'
      };
      request(app)
        .post('/api/v1/profiles/profile')
        .set({ authorization: bearerToken })
        .send(profile)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(500);
          done();
        });
    });
  });
});
