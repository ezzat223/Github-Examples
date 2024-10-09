const { Client } = require("pg");

const pgclient = new Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: "postgres",
  password: "postgres",
  database: "postgres",
});

pgclient.connect();

// ------------------------ Create a Table and insert values for testing ------------------------ //
const table =
  "CREATE TABLE student(id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL, age INT, address VARCHAR(80), email VARCHAR(40))";
const text =
  "INSERT INTO student(firstname, lastname, age, address, email) VALUES($1, $2, $3, $4, $5) RETURNING *";
const values = [
  "Mona",
  "Octocat",
  9,
  "88 Colin P Kelly Jr St, San Francisco, CA 94107, United States",
  "octocat@github.com",
];

// create the table
pgclient.query(table, (err, res) => {
  if (err) throw err;
});

// insert values
pgclient.query(text, values, (err, res) => {
  if (err) throw err;
});

// select statement for testing
pgclient.query("SELECT * FROM student", (err, res) => {
  if (err) throw err;
  console.log(err, res.rows); // Print the data in student table
  console.log(process.env.POSTGRES_HOST);
  pgclient.end();
});
