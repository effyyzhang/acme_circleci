const {expect} = require('chai');
const supertest = require('supertest')
const jwt = require('jwt-simple')
const app = supertest(require("./server"))
const db = require('./db')
const {User} = db.models


describe('Our Application', () => {
    beforeEach(async () => {
        await db.syncAndSeed()
    })

    describe('user oauth', () => {
        it ("return user token", async () => {
            const moeId = (await User.findOne({where: {email:"moe@gmail.com", password: 'MOE'}})).id
            console.log('USE ID =>', moeId)
            const response = await User.authenticate({email:"moe@gmail.com", password: 'MOE'});
            const expectedToken = jwt.encode({id: moeId}, process.env.SECRET)
            expect(response).to.equal(expectedToken)
        })
    })
})

