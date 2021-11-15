const { default: axios } = require("axios");
const { endpoints, oauthPayload } = require("./constants");

const tokenHandler = async (req, res, next) => {
  try {
    const result = await axios.post(endpoints.oauth, {
      ...oauthPayload,
    });
    req.session = {
        ...result.data
    };
    next();
  } catch (error) {
    console.log(error);
    res.send("failed to get auth token");
  }
};
module.exports = tokenHandler;
