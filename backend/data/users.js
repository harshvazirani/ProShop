import bcrypt from 'bcryptjs'

const users = [
    {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
{
    name: 'Rajesh Sharma',
    email: 'rsharma@example.com',
    password: bcrypt.hashSync('123456', 10)
},
{
    name: 'Suresh Sharma',
    email: 'ssharma@example.com',
    password: bcrypt.hashSync('123456', 10)
},
]

export default users