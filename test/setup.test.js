const { rejects } = require("assert");
const {closeConnection} = require("../db-connection");
const server = require("../src");
const { afterAll } = require("jest-circus");

const closeApp= () => 
new Promise((resolve, reject) => {
    server.close((err)=>  {
        if (err) rejects(err);
        else resolve();
    });
});

afterAll(async () => {
    await closeConnection();
    await closeApp();
});