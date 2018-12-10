import AuthSettings from 'Settings/Auth';
import fetch, {Headers} from 'node-fetch';
export default class Auth{
  constructor(){
    this.fetchConfig = {method: 'POST', headers: null };
    this.tokenAPIUrl = 'https://accounts.spotify.com/api/token';
    this.prepareRequestHeaders();
    this.prepareRequestBody();
  }

  prepareRequestHeaders(){
    let idSecretPair =
      `${AuthSettings.CLIENT_ID}:${AuthSettings.CLIENT_SECRET}`;
    let base64EncodedAuthorizationPair =
      Buffer.from(idSecretPair).toString('base64');
    this.fetchConfig.headers = new Headers({
      'Authorization': `Basic ${base64EncodedAuthorizationPair}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
  }

  prepareRequestBody(){
    this.fetchConfig.body = 'grant_type=client_credentials';
  }

  async issueToken(){
    let tokenApiResponse = null;
    let invalidToken = 'issued_out';
    await fetch(this.tokenAPIUrl,this.fetchConfig)
        .then(async response => tokenApiResponse = await response.json());
    if(typeof tokenApiResponse.error === 'undefined'){
        if(typeof tokenApiResponse.access_token !== 'undefined'){
          return tokenApiResponse.access_token;
        }
      }
    return invalidToken;
  }

}
