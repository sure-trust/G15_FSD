MongoDB provides a comprehensive set of commands for interacting with the database. Here is a list of some commonly used MongoDB commands:

1. Database Commands:

    use <databaseName>: Switch to a specific database.
    show dbs: Show a list of available databases.
    db.dropDatabase(): Delete the current database.

2. Collection Commands:

    show collections: List collections in the current database.
    db.createCollection(): Create a new collection.
    db.collection.drop(): Delete a collection.

3. Document CRUD Operations:

    Insert:
        db.collection.insertOne(): Insert a single document.
        db.collection.insertMany(): Insert multiple documents.

    Find:
        db.collection.find(): Query documents in a collection.
        db.collection.findOne(): Query and return a single document.

    Update:
        db.collection.updateOne(): Update a single document.
        db.collection.updateMany(): Update multiple documents.
        db.collection.replaceOne(): Replace a document.

    Delete:
        db.collection.deleteOne(): Delete a single document.
        db.collection.deleteMany(): Delete multiple documents.

4. Query Operators:

    $eq =>equality testing , 
    $ne =>not equality testing, 
    $gt => greater than testing, 
    $lt => less than testing, 
    $gte => greater than or equal to testing, 
    $lte => less than or equal to testing,
    $in => in operator; it knows whether the items in the array or not[],
    $nin => it knows whether the items not in the array ;  it is viceversa of above command, 
    $and , 
    $or, 
    $not,
    $regex => it is used for testing regular expressions
    $elemMatch => it is used for element match testing

5. Indexing:

    db.collection.createIndex(): Create an index on one or more fields in a collection.
    db.collection.dropIndex(): Drop an index.

6. Aggregation Framework:

    db.collection.aggregate(): Perform complex data transformation and aggregation.

7. User and Role Management:

    db.createUser(): Create a new user.
    db.updateUser(): Update an existing user.
    db.dropUser(): Delete a user.
    db.grantRolesToUser(): Grant roles to a user.
    db.revokeRolesFromUser(): Revoke roles from a user.

8. Transactions:

    startSession(): Start a new session for multi-document transactions.
    commitTransaction(): Commit a transaction.
    abortTransaction(): Abort a transaction.

9. Data Export and Import:

    mongoexport: Export data to a file.
    mongoimport: Import data from a file.

10. Miscellaneous:

    db.stats(): Get statistics about the current database.
    db.runCommand(): Execute a database command.