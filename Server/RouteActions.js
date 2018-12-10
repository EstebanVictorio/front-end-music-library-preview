import QueryString from 'querystring';
import IndexController from 'Controller/Index';
import AuthController from 'Controller/Auth';
import SpotifyController from 'Controller/Spotify';

function verifyToken(req, res){
  res.sendFile();
}

function index(req, res){
  let controller = new IndexController(req, res);
  controller.render();
}

async function fetchPlaylist(req,res){
  let token = typeof req.body !== 'undefined' &&
    typeof req.body.token !== 'undefined' ? req.body.token : 'none';
  let controller = new SpotifyController(req.body.token);
  let playlistResponse = await controller.fetchPlaylist();
  res.send(playlistResponse);
}

async function auth(req, res){
  let controller = new AuthController(req,res);
  let token = await controller.getToken();
  res.redirect(`/?access_token=${token}`);
}

export {index,auth, fetchPlaylist, verifyToken};
