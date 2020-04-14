import { Router } from 'express';
import appointmentRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter);

routes.get('/', (request, response) =>
  response.json({ message: 'Hello GoStack!' }),
);

// routes.post('/users', (request, response) => {
//   const { name, email } = request.body;

//   const user = {
//     name,
//     email,
//   };

//   response.json(user);
// });

export default routes;
