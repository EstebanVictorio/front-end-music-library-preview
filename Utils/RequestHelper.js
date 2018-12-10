function getFetchConfigWithToken(token,headers){
  return {
    method: 'POST',
    body: JSON.stringify({token:token}),
    headers: headers
  };
}

export {
  getFetchConfigWithToken
};
