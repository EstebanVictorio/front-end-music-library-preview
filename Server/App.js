import {getExpressServer} from './Server';
let port = 8888;
let server = getExpressServer();

function initMessage(){
  console.log(`Started listening at ${port}`);
}

function start(){
  server.listen(port,initMessage);
}

export default {start};
