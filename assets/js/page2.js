var buttonsObj = {
  action1: { isSelected: false },
  action2: { isSelected: false },
  action3: { isSelected: false },
  action4: { isSelected: false }
};

var setButtonAction = function (objBtn) {
  var btnName = objBtn.name;
  var isSelected = buttonsObj[btnName].isSelected;
  if (isSelected) {
    objBtn.classList.remove('btn-pressed');
  } else {
    objBtn.classList.add('btn-pressed');
  }
  buttonsObj[btnName].isSelected = !isSelected;
}