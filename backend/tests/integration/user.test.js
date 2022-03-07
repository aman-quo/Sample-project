import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';

import app from '../../src/index';

describe('User APIs Test', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => {});
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
      const register={
        phoneNo:'8002695700',
        email:'mkaubr007@gmail.com',
        password:'Msingh123@'
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
      const register={
        email:'mkaubr007@gmail.com',
        password:'Msingh123@'
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
      const register={
        email:'mkaubr007@gmail.com',
        password:'Msingh123@'
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
      const register={
        email:'mkaubr007@gmail.com',
        password:'Msingh123'
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
});
