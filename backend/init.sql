CREATE DATABASE IF NOT EXISTS gift;

USE gift;

CREATE TABLE IF NOT EXISTS Feedback (
    FeedTime DATETIME,
    Selection VARCHAR(255),
    result INT,
    Feedback BOOLEAN
);