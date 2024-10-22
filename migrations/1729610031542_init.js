exports.up = (pgm) => {
    pgm.createTable('expenses', {
        expense_id: {type: 'serial', primaryKey: true},
        title: {type: 'varchar(30)', notNull: true},
        price: {type: 'decimal(10, 2)', notNull: true},
        category: {type: 'varchar(30)', notNull: true},
        essential: {type: 'boolean', notNull: true},
        created_at: {type: 'timestamptz', notNull: true}
    });
};

exports.down = (pgm) => {
    pgm.dropTable('expenses');
};
