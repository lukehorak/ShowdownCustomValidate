function isBanned(thing,list){
  var result = false;
  if (list.indexOf(thing.toLowerCase()) > -1){
    result = true;
  }
  return result;
}

function isAbilityBanned(ability,mon,list){
  result = false;
  if(list.pokemon.list.indexOf(mon.toLowerCase()) > -1){
    if(list.pokemon[mon.toLowerCase()].indexOf(ability.toLowerCase()) > -1){
      result = true;
    }
  }
  else{
    if(list.general.indexOf(ability.toLowerCase()) > 1){
      result = true;
    }
  }
  return result;
}
