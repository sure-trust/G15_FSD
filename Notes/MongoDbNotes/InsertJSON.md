            COMMANDS
=> mongoimport jsonfile.json -d database_name -c collection_name

=> mongoimport products.json -d shop -c products

=> mongoimport products.json -d shop -c products --jsonArray
 //here --jsonArray accepts the import of data expressed with multiple Mongo documents within a single JSON array.
 // limited to import of 16 mb or smaller.   