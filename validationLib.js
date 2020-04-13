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

function isItemBanned(item, list, banMegas, banZ) {
  let result = false;

  if (banMegas && isMegaStone(item)){
    return true;
  }

  if (banZ && isZCrystal(item)){
    return true
  }

  if (list.indexOf(thing.toLowerCase()) > -1){
    result = true;
  }

  return result;
}

// Helper Functions
const isZCrystal = (item) => {
  return /.+ium Z/.test(item)
}

const isMegaStone = (item) => {
  const lowerItem = item.toLowerCase();
  const eviolite = /eviolite/.test(lowerItem);
  const test = /.+ite/.test(lowerItem);
  return (!eviolite || test)
}
