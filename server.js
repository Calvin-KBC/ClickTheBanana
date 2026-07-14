const express = require("express");
const Database = require("better-sqlite3");
const db = new Database("banana.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS bananas (
        id INTEGER PRIMARY KEY,
        counter INTEGER
    );
`);

db.exec(`
    INSERT OR IGNORE INTO bananas (id, counter)
    VALUES (1, 0);
`);

const app = express();

app.use(express.static("public"));

app.get("/counter", (req, res) => {
    const row = db.prepare(`
    SELECT counter
    FROM bananas
    WHERE id = 1
`).get();

    res.json({
        counter: row.counter
    });
});

app.post("/click", (req, res) => {
    const row = db.prepare(`
        SELECT counter
        FROM bananas
        WHERE id = 1
    `).get();

    const newCounter = row.counter + 1;

    db.prepare(`
        UPDATE bananas
        SET counter = ?
        WHERE id = 1
    `).run(newCounter);

    res.json({
        counter: newCounter
    });
});

app.listen(3000, () => {
    console.log("Server läuft auf http://localhost:3000");
});