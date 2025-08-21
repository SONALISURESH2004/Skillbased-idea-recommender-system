const db = require('./db');

async function test() {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    console.log('DB Connected! Test result:', rows[0].result);
  } catch (err) {
    console.error('DB Connection Error:', err);
  }
}

test();
