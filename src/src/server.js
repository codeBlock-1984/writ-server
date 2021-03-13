import http from 'http';
import app from './app';

const port  = process.env.PORT || 3004;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Writ server is listening on port ${port}`);
});
