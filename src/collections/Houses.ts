import { CollectionConfig } from 'payload/types'

const Houses: CollectionConfig = {
  slug: 'houses',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: ({req: {user}}) => { return true }
  },
  fields: [
    {
        name: 'name',
        type: 'text',
        required: true
    }
  ],
}

export default Houses
