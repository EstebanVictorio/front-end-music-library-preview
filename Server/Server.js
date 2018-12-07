import Express from 'express';
import BodyParser from 'body-parser';
import {index, auth, fetchPlaylist} from './RouteActions';

function withActions(server){
  let router = Express.Router();
  router.get('/',index);
  router.get('/auth',auth);
  router.post('/getPlaylist',fetchPlaylist);
  server.use(router);
  return server;
}

function withStaticResources(server){
  server.use(BodyParser.urlencoded({extended:false}));
  server.use('/dist',Express.static('dist'));
  server.use('/Style',Express.static('Style'));
  server.use('/Images',Express.static('Images'));
  return server;
}

function getExpressServer(){
  let expressAppServer = Express();
  expressAppServer.use(BodyParser.json());
  expressAppServer = withActions(expressAppServer);
  expressAppServer = withStaticResources(expressAppServer);
  return expressAppServer;
}

export {getExpressServer};
