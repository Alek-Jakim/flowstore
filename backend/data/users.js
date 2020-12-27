import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('abc123', 10),
        isAdmin: true
    },
    {
        name: 'John Smith',
        email: 'john@example.com',
        password: bcrypt.hashSync('abc123', 10)
    },
    {
        name: 'Michael Davis',
        email: 'michael@example.com',
        password: bcrypt.hashSync('abc123', 10)
    }
]


export default users