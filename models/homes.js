import mongoose from 'mongoose'

const Schema = mongoose.Schema

const homeSchema = new Schema({
  home: String,
  neighborhood: String,
  bedrooms: Number,
  bathrooms: Number,
  price: Number,
})

const Home = mongoose.model('Home', homeSchema)

export {
  Home
}