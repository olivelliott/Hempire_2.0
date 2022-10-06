const db = require("./connection");
const { User, Product, Category } = require('../models')


db.once("open", async () => {
    await User.deleteMany()

    const users = await User.insertMany([
      {
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        password: 'password12345',
      },
      {
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345',
      },
      {
        firstName: 'Jamie',
        lastName: 'Wilson',
        email: 'jswilson@testmail.com',
        password: 'password12345',
      },
    ])
  
    console.log('users seeded 💫')

    await Category.deleteMany()

    const categories = await Category.insertMany([
      { name: 'Women' },
      { name: 'Men' },
    ])
  
    console.log('categories seeded 💫')

    await Product.deleteMany()

    const products = await Product.insertMany([
    ])
  
    console.log('products seeded 💫')
  
    process.exit()
  
  
  
  
});
