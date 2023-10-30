      INSERING DOCUMENTS IN MONGODB

=> db.<collection-name>.insertOne(
    {
        key1:value1,
        key2:value2,
        ...
    }
)  : This command is used to insert single document only one document can be inserted into the collection

=>  db.<collection-name>.insertMany([
    {
        key1:value1,
        key2:value2,
        ...
    },
    {
        key1:value1,
        key2:value2,
        ...
    },
    {
        key1:value1,
        key2:value2,
        ...
    }
])

=>insert ordered and unordered data woith ordered:false:0