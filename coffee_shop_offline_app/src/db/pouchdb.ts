import PouchDB from "pouchdb-browser";

export const localDB = new PouchDB("coffee_local");

export const remoteDB = new PouchDB("http://admin:admin@127.0.0.1:5984/coffee_shop");

localDB
  .sync(remoteDB, {
    live: true,
    retry: true,
  })
  .on("change", (info) => console.log("Replication change:", info))
  .on("paused", (err) => console.log("Replication paused:", err))
  .on("active", () => console.log("Replication resumed"))
  .on("error", (err) => console.error("Replication error:", err));
