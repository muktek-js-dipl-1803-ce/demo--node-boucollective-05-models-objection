
exports.up = function(knex, Promise) {
  return knex.schema.table('products', (productsTable)=>{
    productsTable.integer('vendor_id')
      .unsigned()
      .references('id')
      .inTable('vendors')
      .onDelete('cascade')
      .onUpdate('cascade')

    return productsTable
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('products', (productsTable)=>{
    productsTable.dropForeign('vendor_id')
    productsTable.dropColumn('vendor_id')

    return productsTable
  })
};
