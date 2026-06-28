CREATE TABLE profiles(

id INT AUTO_INCREMENT PRIMARY KEY,

username VARCHAR(100) UNIQUE NOT NULL,

name VARCHAR(150),

avatar_url TEXT,

github_url TEXT,

public_repos INT,

followers INT,

following INT,

total_stars INT,

total_forks INT,

top_language VARCHAR(100),

most_starred_repo VARCHAR(200),

average_stars FLOAT,

account_created DATETIME,

analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
