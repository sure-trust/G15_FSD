     MANAGING DATABASES AND COLLECTIONS
=> show dbs : this command shows databases in our server

=> use <database_name> : this command switches database one to another or if mentioned database is not present in server then it will create new database with that mentioned database name

=> db.dropDatabase() : this command will deletes the current database

=> show collections : this command will display the collections (tables in sql) from the seleceted database.

=> db.createCollection('<collection_name>') : this will create a new collection with mentioned collection name in parenthesis.

=> db.<collection_name>.drop() : this command will deletes the current collection from the database.

=>In your new Database if there is no atleast one collection then database should not be display on (show dbs) command.