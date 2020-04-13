var movelist = new Array();
var monslist = new Array();
var itemlist = new Array();
var abilitylist = new Array();
var isValid = true;
var reason = "";


// Importing as result of function because chrome plugins play by their own rules
var banned = setBans();
var teamchart = $('.teamchart');
var { banMegas, banZ } = banned.misc;

// Mons
var monsObj = teamchart.find('.setcell-pokemon').toArray();
for (name in monsObj) {
  let monName = monsObj[name].lastChild.value;
  if(isBanned(monName, banned.pokemon)){
    isValid = false;
    reason += monName;
  }
};

// Ability
var abilityObj = teamchart.find('.setcell-ability').toArray();
//const abilitylist = new Array();

for(item in monsObj){
  var pair = [abilityObj[item].lastChild.value, monsObj[item].lastChild.value]
  abilitylist.push(pair)
}

for (i in abilitylist){
  if(isAbilityBanned(abilitylist[i][0], abilitylist[i][1], banned.abilities)){
    isValid = false;
    reason += `${abilitylist[i][1]} can't be used with ${abilitylist[i][0]}`
  }
};

///////////////////

// Moves
var moveObj = teamchart.find('.setcol-moves').find('.setcell').toArray();
for (move in moveObj) {
  var moveName = moveObj[move].lastChild.value;
  if(isBanned(moveName, banned.moves)){
    isValid = false;
    reason += moveName;
  }
};

// Items
var itemObj = teamchart.find('.setcell-item').toArray();
for (item in itemObj){
  var itemName = itemObj[item].lastChild.value;
  if(isBanned(itemName, banned.items)){
    isValid = false;
    reason += itemName;
  }
};


if(isValid){
  alert('VALID!');
}
else{
  alert('NOPE! Reason: ' + reason);
}
