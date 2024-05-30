module.exports = {
    create: (connection, body, callback) => {
        connection.query('INSERT INTO users SET ?', body, (err, res) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: null, id: null, success: true });
        });

    },
    getAll: (connection, callback) => {
        connection.query('SELECT * FROM users', (err, res) => {
            if (err) {
                callback({ array: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback({ array: res, id: null, success: true });
        });
    },
}