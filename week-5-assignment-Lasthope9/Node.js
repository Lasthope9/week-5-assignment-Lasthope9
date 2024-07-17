const mysql = require('mysql');

// Create a connection to MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Letsoalo9%',
  database: '5week_movies',
});

// Connect to the database
connection.connect();

// Example SELECT statements
const query1 = 'SELECT * FROM movies';
const query2 = 'SELECT title, release_year FROM movies WHERE genre = "Action"';
const query3 = 'SELECT * FROM actors WHERE age > 30';

// Execute queries
connection.query(query1, (error, results, fields) => {
  if (error) throw error;
  console.log('Query 1 results:', results);
});

connection.query(query2, (error, results, fields) => {
  if (error) throw error;
  console.log('Query 2 results:', results);
});

connection.query(query3, (error, results, fields) => {
  if (error) throw error;
  console.log('Query 3 results:', results);
});

// Close the connection
connection.end();
