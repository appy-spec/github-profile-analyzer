const github = require("../services/githubService.js");
const analyzer = require("../services/analyzerService.js");
const model = require("../models/profileModel.js");

exports.analyze = async (req, res) => {
  const username = req.params.username;

  const data = await github.getGithubData(username);

  const analysis = analyzer.analyzeRepos(data.repos);

  await model.saveProfile([
    username,

    data.user.name,

    data.user.avatar_url,

    data.user.html_url,

    data.user.public_repos,

    data.user.followers,

    data.user.following,

    analysis.total_stars,

    analysis.total_forks,

    analysis.top_language,

    analysis.most_starred_repo,

    analysis.average_stars,

    data.user.created_at,

    data.user.followers,

    analysis.total_stars,

    analysis.total_forks,
  ]);

  res.json({
    message: "Profile analyzed successfully",

    analysis,
  });
};

exports.getProfiles = async (req, res) => {
  const data = await model.getAll();

  res.json(data);
};

exports.getProfile = async (req, res) => {
  const data = await model.getOne(req.params.username);

  if (!data) {
    return res.status(404).json({
      message: "Profile not found",
    });
  }

  res.json(data);
};
