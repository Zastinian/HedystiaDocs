---
id: example
title: Example
---

```js
const Database = require("@hedystia/db");

// Create a file named database.ht and enter the password
const database = new Database("./database.ht", "password");

// You can only use it once to create the table after that you can no longer use it.
database.createTable("users", ["id", "name", "email"]);

database.insert("users", { id: "1", name: "John Doe", email: "jdoe@example.com" });

database.insert("users", { id: "2", name: "María", email: "maria@example.com" });

const users = database.select("users");

console.log("----------------------------------");

console.log(users);

database.addColumn("users", "phone");

database.addColumn("users", "lang", "en-US");

const newUsersPhone = database.select("users");

console.log("----------------------------------");

console.log(newUsersPhone);

database.deleteColumn("users", "phone");

const oldUsersPhone = database.select("users");

console.log("----------------------------------");

console.log(oldUsersPhone);

const userJohn = database.select("users", { name: "John Doe" });

console.log("----------------------------------");

console.log(userJohn);

database.delete("users", { name: "María" });

const users2 = database.select("users");

console.log("----------------------------------");

console.log(users2);

database.update("users", { id: "1" }, { name: "Jane Doe", lang: "es-ES" });

const users3 = database.select("users");

console.log("----------------------------------");

console.log(users3);

database.dropAll();

const users4 = database.select("users");

console.log("----------------------------------");

console.log(users4);

database.enableMigrations();

database.createMigration(
	{
		id: "cdaa5095-0c11-4878-8d89-c9be41215e57",
		description: "Description",
		timestamp: Date.now(),
	},
	() => {
		database.createTableIfNotExists("test_migration", ["name"]);
		database.insert("test_migration", { name: "John" });
	},
);

const migrations = database.select("migrations");

console.log("----------------------------------");

console.log(migrations);

const testMigration = database.select("test_migration");

console.log("----------------------------------");

console.log(testMigration);
```
