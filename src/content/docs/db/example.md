---
id: example
title: Example
---

```js
const db = require("@hedystia/db");

const database = new db("./database.ht", "password");

database.createTable("users", ["id", "name", "email"]);

database.insert("users", {id: "1", name: "John Doe", email: "jdoe@example.com"});

database.insert("users", {id: "2", name: "María", email: "maria@example.com"});

const users = database.select("users");

console.log("----------------------------------");

console.log(users);

const userJohn = database.select("users", {name: "John Doe"});
console.log("----------------------------------");
console.log(userJohn);

database.delete("users", {name: "María"});

const users2 = database.select("users");
console.log("----------------------------------");
console.log(users2);

database.update("users", {id: "1"}, {name: "Jane Doe"});

const users3 = database.select("users");
console.log("----------------------------------");
console.log(users3);
```
