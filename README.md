# Data Access Notes

### Pre-Configuration

Install objection

```sh
npm install --save objection
```

(for secondary key migration)

```
knex migrate:make 20180804155332_create_foreignkey_on_products
```


### Relevant files/folders


+ `server.js`
  - import objection-`Model` + pass knex-db to objection

  ```js
  const {Model} = require('objection')

  //....
  Model.knex(appDb)
  ```

+ `src/models/`
  - we must declare our models. a model is a representation of a table

+ `src/migrations/20180804155332_create_foreignkey_on_products.js`
  - if we are going to use models that need to fetch records from related tables, we must generate a migration and create the secondary key on the 'belongs to' table in a migration

+ `src/apiRouter.js`
  - we import our models here and we can use a model-class to execute query and fetch records from related tables

  ```js
  Vendor.query()
    .eager('products')
    .then((recordsWithProducts)=>{
      res.status(200).json(recordsWithProducts)
    })
  ```
