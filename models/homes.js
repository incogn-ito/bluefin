import mongoose from 'mongoose'

const Schema = mongoose.Schema

const homeSchema = new Schema({
  name: String,
  address: String,
  neighborhood: String,
  bedrooms: Number,
  bathrooms: Number,
  listPrice: Number,
})

const Home = mongoose.model('Home', homeSchema)

export {
  Home
}