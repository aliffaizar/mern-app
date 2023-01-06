const mongoose = require('mongoose')
const { connect, disconnect } = require('../../services/mongoDB')
const Property = require('../Property')

describe('Property Model', () => {
  beforeAll(async () => {
    await connect()
  })
  afterAll(async () => {
    await disconnect()
  })

  const requiredFields = [
    'name',
    'price',
    'type',
    'category',
    'description',
    'agent',
  ]

  describe('test all requred field', () => {
    requiredFields.forEach((field) => {
      it(`should require ${field}`, () => {
        const property = new Property({})
        const { errors } = property.validateSync()
        expect(errors[field].message).toEqual(`${field} should be provided`)
      })
    })
  })

  describe('test all enum field', () => {
    it('should have a type house, apartement, condo, townhouse, land', () => {
      const property = new Property({
        name: 'test',
        price: 100,
        type: 'test',
        category: 'rent',
        description: 'test',
        agent: '5f9f1b9b9c9d4b2b8c8b9c9d',
      })
      const { errors } = property.validateSync()
      expect(errors.type.message).toEqual(
        'type should be house, apartement, condo, townhouse, land'
      )
    })
    it('should have a category rent or sale', () => {
      const property = new Property({
        name: 'test',
        price: 100,
        type: 'house',
        category: 'test',
        description: 'test',
        agent: '5f9f1b9b9c9d4b2b8c8b9c9d',
      })
      const { errors } = property.validateSync()
      expect(errors.category.message).toEqual('category should be rent or sale')
    })
  })
  describe('send a valid property', () => {
    const data = {
      name: 'test',
      price: 100,
      type: 'house',
      category: 'rent',
      description: 'test',
      agent: '5f9f1b9b9c9d4b2b8c8b9c9d',
    }

    it('should has no error', () => {
      const property = new Property(data)
      expect(property.validateSync()).toBeUndefined()
    })

    it('should return a valid property', () => {
      const property = new Property({ ...data })
      expect(property.toJSON()).toEqual({
        ...data,
        agent: mongoose.Types.ObjectId(data.agent),
        _id: expect.any(mongoose.Types.ObjectId),
        id: expect.any(String),
        images: [],
      })
    })
  })
})
