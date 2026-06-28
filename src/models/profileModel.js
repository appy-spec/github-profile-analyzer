const db = require("../config/database");

exports.saveProfile = (data) => {
  return new Promise((resolve, reject) => {
    const sql = `

INSERT INTO profiles

(username,name,avatar_url,
github_url,
public_repos,
followers,
following,
total_stars,
total_forks,
top_language,
most_starred_repo,
average_stars,
account_created)

VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)

ON DUPLICATE KEY UPDATE

followers=?,
total_stars=?,
total_forks=?

`;

    db.query(sql, data, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM profiles", (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

exports.getOne = (username) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM profiles WHERE username=?",

      [username],

      (err, result) => {
        if (err) reject(err);
        else resolve(result[0]);
      },
    );
  });
};
