import dotenv from 'dotenv';
dotenv.config();
import mongoAdapter from './adapters/mongodb';
import app from './app';

const PORT = process.env.PORT || 5000;
let server;
if (process.env.DATABASE_URL) {
  (async () => {
    await mongoAdapter.connect();
    server = app.listen(PORT, () => {
      // tslint:disable-next-line: no-console
      console.log('Express server listening on port ' + PORT);
    });
  })();
}

export default server;
