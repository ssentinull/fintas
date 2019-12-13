const saveTokenAttrValue = async (userObj, token) => {
  userObj.token = token;
  await userObj.save();
};

module.exports = { saveTokenAttrValue };
