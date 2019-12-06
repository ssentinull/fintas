const negateIsCheckedInAttr = userObject => {
  userObject.isCheckedIn = !userObject.isCheckedIn;
  userObject.save();
};

module.exports = { negateIsCheckedInAttr };
