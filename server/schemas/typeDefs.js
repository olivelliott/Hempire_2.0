const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    brand: String
    size: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: [Category]
    user: [User]
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    helloWorld: String
    categories: [Category]
    products: [Product]
    product(_id: ID!): Product
    user: User
    users: [User]
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
    addProduct(
      name: String!
      brand: String
      size: String!
      description: String
      image: String
      quantity: Int
      price: Float
      category: ID!
      user: [ID]
    ): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
