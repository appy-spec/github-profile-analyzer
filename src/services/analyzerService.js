exports.analyzeRepos = (repos) => {
  let stars = 0;

  let forks = 0;

  let languages = {};

  let biggestRepo = "";

  let highestStars = 0;

  repos.forEach((repo) => {
    stars += repo.stargazers_count;

    forks += repo.forks_count;

    if (repo.language) {
      languages[repo.language] = (languages[repo.language] || 0) + 1;
    }

    if (repo.stargazers_count > highestStars) {
      highestStars = repo.stargazers_count;

      biggestRepo = repo.name;
    }
  });

  let topLanguage = Object.keys(languages).sort(
    (a, b) => languages[b] - languages[a],
  )[0];

  return {
    total_stars: stars,

    total_forks: forks,

    top_language: topLanguage || null,

    most_starred_repo: biggestRepo,

    average_stars: repos.length ? stars / repos.length : 0,
  };
};
