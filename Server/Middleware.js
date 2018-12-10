function enableCORS(req, res, next){
  res.setHeader('Access-Control-Allow-Headers','*');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','POST,GET,OPTIONS');
  next();
}


export {
  enableCORS
};
