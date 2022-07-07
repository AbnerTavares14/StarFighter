import db from "../db.js";

async function insertFighter(name: string, result: string) {
    const verifyFighter = await db.query(`SELECT * FROM fighters WHERE username=$1`, [name]);
    if (verifyFighter.rowCount === 0 && result === 'win') {
        return db.query(`INSERT INTO fighters (username, wins, losses, draws) VALUES ($1, 1, 0, 0)`, [name]);
    }
    if (verifyFighter.rowCount === 0 && result === 'loss') {
        return db.query(`INSERT INTO fighters (username, wins, losses, draws) VALUES ($1, 0, 1, 0)`, [name]);
    }
    if (verifyFighter.rowCount === 0 && result === 'draw') {
        return db.query(`INSERT INTO fighters (username, wins, losses, draws) VALUES ($1, 0, 0, 1)`, [name]);
    }
    const { rows } = verifyFighter;
    console.log(rows)
    if (result === 'win') {
        return db.query(`UPDATE fighters SET wins=$1  WHERE username=$2`, [rows[0].wins + 1, name]);
    }
    if (result === 'loss') {
        return db.query(`UPDATE fighters SET losses=$1 WHERE username=$2`, [rows[0].losses + 1, name]);
    }
    if (result === 'draw') {
        return db.query(`UPDATE fighters SET draws=$1 WHERE username=$2`, [rows[0].draws + 1, name]);
    }
}

async function ranking() {
    return db.query(`SELECT * FROM fighters ORDER BY wins, draws`);
}

const battleRepository = {
    insertFighter,
    ranking
};

export default battleRepository;