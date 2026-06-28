const axios = require("axios");

exports.getGithubData = async (username) => {
  const user = await axios.get(`${process.env.GITHUB_API}/users/${username}`);

  const repos = await axios.get(
    `${process.env.GITHUB_API}/users/${username}/repos`,
  );

  return {
    user: user.data,
    repos: repos.data,
  };
};
