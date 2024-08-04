import mongoose from 'mongoose'

const Schema = mongoose.Schema

const homeSchema = new Schema({
  address: String,
  neighborhood: String,
  listingPrice: Number,
  newListing: Boolean
})

const Home = mongoose.model('Home', homeSchema)

export {
  Home
}