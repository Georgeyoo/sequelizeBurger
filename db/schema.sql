--  Create the `burgers_db`.
--    * Switch to or use the `burgers_db`.
--    * Create a `burgers` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.
--      * **date**: a TIMESTAMP.

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY(id)
);

 -- Start MySQL command line tool and login: `mysql -u root -p`.

 --   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

 --   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

 --   * Close out of the MySQL command line tool: `exit`.
