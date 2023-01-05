const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name should be provided'],
      text: true,
    },
    location: {
      type: String,
      default: 'Point',
      enum: ['Point'],
      coordinates: {
        type: [Number],
      },
      address: {
        type: String,
      },
      city: {
        type: String,
      },
    },
    price: {
      type: Number,
      required: [true, 'Price should be provided'],
    },
    type: {
      type: String,
      enum: ['house', 'apartement', 'condo', 'townhouse', 'land'],
      required: [true, 'Type should be provided'],
    },
    category: {
      type: String,
      enum: ['rent', 'sale'],
      required: [true, 'Category should be provided'],
    },
    description: {
      type: String,
      required: [true, 'Description should be provided'],
    },
    images: {
      type: [String],
    },
    agent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Agent should be provided'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
)

propertySchema.index({ location: '2dsphere' })
propertySchema.index({ name: 'text' })

const Property = mongoose.model('Property', propertySchema)

module.exports = Property
