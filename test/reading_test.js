const assert = require('assert');
const User = require('../src/user');

describe('Reading users collection', ()=>{
    let joe;
    beforeEach((done)=>{
        joe = new User({name: 'Joe', postCount: 22});
        joe.save()
           .then(()=>{
               done();
           });
    });

    it('get all users', (done)=>{
        User.find({})
            .then((users)=>{
                assert(users[0].name ==='Joe');
                done();
            });
    });

    it('get one user', (done) => {
        User.findOne({name:'Joe'})
            .then((user) => {
                assert(user._id.toString() === joe._id.toString());
                done();
            });
    });
});