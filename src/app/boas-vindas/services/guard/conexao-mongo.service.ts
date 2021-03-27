import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexaoMongoService {

  constructor() { 
    var minimongo = require("minimongo");

    var LocalDb = minimongo.MemoryDb;
    // Create local db (in memory database with no backing)
    const db = new LocalDb();
    // Add a collection to the database
    db.addCollection("animals");

    const doc = { species: "dog", name: "Bingo" };

    // Always use upsert for both inserts and modifies
    db.animals.upsert(doc, function() {
      // Success:

      // Query dog (with no query options beyond a selector)
      db.animals.findOne({ species:"dog" }, {}, (res) => {
        console.  log("Dog's name is: " + res.name);
      });
    });
  }
}
