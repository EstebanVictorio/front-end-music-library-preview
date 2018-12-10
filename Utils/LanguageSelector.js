function getClientLanguage(){
  let splitDomain = window.location.host.split('.');
  let noSubDomain = splitDomain.length === 2;
  let isLocalhost = window.location.host.includes('localhost');
  if(isLocalhost){
    return splitDomain.length > 1 ? splitDomain[0]:'en';
  }
  return noSubDomain ? 'en' : getValidLanguage(splitDomain[0]);
}

function getValidLanguage(subDomain){
  let validLanguages = ['es','en'];
  let filteredLanguages =
    validLanguages.filter(validLanguage => subDomain === validLanguage);
  let chosenLanguage = filteredLanguages.length > 0 ? filteredLanguages[0]:'en';
  return chosenLanguage;
}

function getServerLanguage(req){
  return 'en';
}

export {
  getClientLanguage,
  getServerLanguage
};
