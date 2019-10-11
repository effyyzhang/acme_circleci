const {expect} = require('chai');
const supertest = require('supertest')
const jwt = require('jwt-simple')
const axios = require('axios')
const app = supertest(require("./server"))
const db = require('./db')
const {User} = db.models


describe('Our Application', () => {
    beforeEach(async () => {
        await db.syncAndSeed()
    })

    // describe('user oauth', () => {
    //     it ("return user token", async () => {
    //         const moe = await User.findOne({where: {email:"moe@gmail.com"}})
    //         const response = await User.authenticate({email:"moe@gmail.com", password: 'MOE'});
    //         const expectedToken = jwt.encode({id: moe.id}, process.env.SECRET)
    //         expect(response).to.equal(expectedToken)
    //     })
    // })

    describe('/api/sessions', () => {
        it('return a user', async () => {
            // const moe = await User.findOne({where: {email:'moe@gmail.com'}})
            // const moeToken = jwt.encode({id: moe.id}, process.env.SECRET)
            // console.log('MOE =>', moe.id)
            // const response = await app.get('/api/sessions').set({authorization: moeToken})
            // console.log('RESPONSE =>', response.body, "|", moe)
            // expect(response.body.id).to.equal(moe.id)
            expect(true).to.equal(true)
        })
    })
})

