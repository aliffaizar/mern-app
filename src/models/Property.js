const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name should be provided'],
      text: true,
    },
    location: {
      address: {
        type: String,
      },
      city: {
        type: String,
      },
    },
    price: {
      type: Number,
      required: [true, 'price should be provided'],
    },
    type: {
      type: String,
      enum: {
        values: ['house', 'apartement', 'condo', 'townhouse', 'land'],
        message: 'type should be house, apartement, condo, townhouse, land',
      },
      required: [true, 'type should be provided'],
    },
    category: {
      type: String,
      enum: {
        values: ['rent', 'sale'],
        message: 'category should be rent or sale',
      },
      required: [true, 'category should be provided'],
    },
    description: {
      type: String,
      required: [true, 'description should be provided'],
    },
    images: {
      type: [String],
    },
    agent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'agent should be provided'],
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

propertySchema.index({ name: 'text' })

const Property = mongoose.model('Property', propertySchema)

module.exports = Property
