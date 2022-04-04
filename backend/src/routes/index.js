import express from 'express';
const router = express.Router();

import userRoute from './userRoute';
import profileRoute from './profileRoute';
import searchRoute from './searchRoute';
import contactRoute from './contactRoute';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/profiles', profileRoute);
  router.use('/searches', searchRoute);
  router.use('/contacts',contactRoute);
  return router;
};

export default routes;
