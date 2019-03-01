function isBanned(thing,list){
  var result = false;
  if (list.indexOf(thing.toLowerCase()) > -1){
    result = true;
  }
  return result;
}

function isAbilityBanned(ability, mon, abilities){
  result = false;
  if(mon.toLowerCase() in abilities.combos){
    if(abilities.combos[mon.toLowerCase()].includes(ability.toLowerCase())){
      result = true;
    }
  }
  else{
    if(abilities.general.indexOf(ability.toLowerCase()) > 1){
      result = true;
    }
  }
  return result;
}
