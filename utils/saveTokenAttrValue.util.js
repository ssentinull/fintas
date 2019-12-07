const saveTokenAttrValue = (userObj, token) => {
  userObj.token = token;
  userObj.save();
};

module.exports = { saveTokenAttrValue };
