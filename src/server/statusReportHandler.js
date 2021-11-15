const { default: axios } = require("axios");
const { endpoints } = require("./constants");

const createStatusReport = async (req, res) => {
  try {
    const result = await axios.post(
      endpoints.statusReport,
      {},
      {
        headers: {
          Authorization: `Bearer ${req.session.access_token}`,
          Accept: "application/json",
        },
      }
    );
    res.json(result.data);
  } catch (error) {
    console.log(error);
    res.send("failed to create status report");
  }
};

const getStatusReport = async (req, res) => {
  const { jobid } = req.params;
  try {
    const result = await axios.get(`${endpoints.statusReport}/${jobid}`, {
      headers: {
        Authorization: `Bearer ${req.session.access_token}`,
        Accept: "application/json",
      },
    });
    res.json(result.data);
  } catch (error) {
    console.log(error);
    res.send("failed to get status report");
  }
};

module.exports = {
  createStatusReport,
  getStatusReport,
};
