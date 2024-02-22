import { CollectionConfig } from 'payload/types'

const Matches: CollectionConfig = {
  slug: 'matches',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: ({req: {user}}) => { return true }
  },
  fields: [
    {
        type: 'row',
        fields: [
            {
                name: 'title',
                type: 'text',
                required: true
            },
            {
                name: 'date',
                type: 'date',
                required: true,
                admin: {
                    date: {
                      pickerAppearance: 'dayOnly',
                      displayFormat: 'd MMM yyy',
                    },
                },
            }
        ]
    },
    {
        name: 'played',
        type: 'checkbox',
        defaultValue: false,
    },
    {
        type: 'row',
        fields: [
            {
                name: 'team1',
                type: 'relationship',
                relationTo: 'houses',
                required: true
            },
            {
                name: 'score1',
                type: 'number',
                defaultValue: 0,
                admin: {
                    condition: (data, siblingData, {user}) => {
                        if (data.played) {
                            return true
                        }
                        else {
                            return false
                        }
                    }
                }
            },
            {
                name: 'score2',
                type: 'number',
                defaultValue: 0,
                admin: {
                    condition: (data, siblingData, {user}) => {
                        if (data.played) {
                            return true
                        }
                        else {
                            return false
                        }
                    }
                }
            },
            {
                name: 'team2',
                type: 'relationship',
                relationTo: 'houses',
                required: true
            },
        ]
    },
  ],
}

export default Matches
