module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db.db3',
    },
    useNullAsDefault: true,
  },
};
