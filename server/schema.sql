CREATE DATABASE thermal_springs;

CREATE TABLE springs (
    sc VARCHAR(2),
    latitude DECIMAL,
    longitude DECIMAL,
    name VARCHAR(80),
    fahrenheit VARCHAR(10),
    celsius VARCHAR(10)
);

\COPY springs FROM /Users/julianbowman/Desktop/JavaScript/MVP/MVP/NCEI-thermal-springs.csv DELIMITER ',' CSV HEADER; 