import {Headers} from 'node-fetch';
if(typeof global !== 'undefined'){
  if(typeof global.Headers === 'undefined'){
    global.Headers = Headers;
  }
}

let headers = new Headers(
  {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin' : '*',
    'mode': 'cors'
  }
);

export {
  headers
};
