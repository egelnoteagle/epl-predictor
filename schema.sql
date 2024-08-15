CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(128) NOT NULL,
    points INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE fixtures (
    id SERIAL PRIMARY KEY,
    season VARCHAR(20) NOT NULL,
    round INT NOT NULL,
    date TIMESTAMP NOT NULL,
    home_team VARCHAR(100) NOT NULL,
    away_team VARCHAR(100) NOT NULL,
    home_team_badge VARCHAR(255),
    away_team_badge VARCHAR(255),
    venue VARCHAR(255),
    result VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE predictions (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    fixture_id INT REFERENCES fixtures(id) ON DELETE CASCADE,
    prediction VARCHAR(10) NOT NULL,
    points_awarded INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE VIEW standings AS
SELECT 
    u.id AS user_id,
    u.username,
    SUM(p.points_awarded) AS total_points
FROM 
    users u
LEFT JOIN 
    predictions p ON u.id = p.user_id
GROUP BY 
    u.id
ORDER BY 
    total_points DESC;