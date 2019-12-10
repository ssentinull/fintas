const negateIsCheckedInAttr = async userObject => {
  userObject.isCheckedIn = !userObject.isCheckedIn;
  await userObject.save();
};

module.exports = { negateIsCheckedInAttr };
