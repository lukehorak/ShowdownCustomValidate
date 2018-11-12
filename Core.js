var movelist = new Array();
var monslist = new Array();
var itemlist = new Array();
var abilitylist = new Array();
var isValid = true;
var reason = "";

var banned = setBans();

var teamchart = $('.teamchart')


// Mons
var monsObj = teamchart.find('.setcell-pokemon').toArray();
for (name in monsObj) {
  var monName = monsObj[name].lastChild.value;
  if(isBanned(monName, banned.pokemon)){
    isValid = false;
    reason += monName;
  }
};

// Ability
// TODO - get mon/ability combo
var abilityObj = teamchart.find('.setcell-ability').toArray();
var abilitylist = new Array();

for(item in monsObj){
  abilitylist.push(abilityObj[item].lastChild.value + monsObj[item].lastChild.value)
}

for (i in abilitylist){
  if(isAbilityBanned(abilitylist[i][0], abilitylist[i][1], banned.abilities)){
    isValid = false;
    reason += "ability"
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
