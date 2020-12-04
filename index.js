const {
    graphql,
    buildSchema
} = require('graphql')

const db = {
    users: [{
            id: '1',
            email: 'wi.fi.xor@gmail.com',
            name: 'Raxmatilla',
            avatarUrl: 'img1.png'
        },
        {
            id: '2',
            email: 'wi.fi.xor222@gmail.com',
            name: 'Rax',
            avatarUrl: 'img2.png'
        },
        {
            id: '3',
            email: 'wi.fi.xor333@gmail.com',
            name: 'Raxm',
            avatarUrl: 'img3.png'
        },
        {
            id: '4',
            email: 'wi.fi.xor444@gmail.com',
            name: 'Raxmat',
            avatarUrl: 'img4.png'
        }
    ]
}

const schema = buildSchema(`
    type Query {
        users: [User!]!
    }
    type User {
        id: ID!
        email: String!
        name: String
        avatarUrl: String
    }
`)

const rootValue = {
    users: () => db.users
}


graphql(
    schema,
    `   
        {
            users {
                id,
                email,
                name,
                avatarUrl
            }
        }

    `,
    rootValue
).then(
    res => console.dir(res, {
        depth: null
    })
).catch(
    console.error
)