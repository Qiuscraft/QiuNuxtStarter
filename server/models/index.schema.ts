import { defineMongooseModel } from '#nuxt/mongoose'

export const IndexSchema = defineMongooseModel({
  name: 'Index',
  schema: {
    index: {
      type: String,
      required: true,
      unique: true,
    },
  },
})
