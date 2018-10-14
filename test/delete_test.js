const assert = require('assert');
const User = require('../src/user');

describe('Delete user from users schema', ()=>{
    let joe;
    beforeEach((done) => {
        joe = new User({ name: 'Joe', postCount: 22 });
        joe.save()
            .then(() => {
                done();
            });
    });

    it('Delete user deleteOne()', (done)=>{
        User.deleteOne({name:"Joe"})
            .then(()=>{
                return User.findOne({name:"Joe"});
            })
            .then((user)=>{
                assert(user == undefined);
                done();
            });
    });

    it('Delete user findByIdAndDelete()', (done) => {
        User.findByIdAndDelete(joe._id)
            .then(() => {
                return User.findOne({ name: "Joe" });
            })
            .then((user) => {
                assert(user == undefined);
                done();
            });
    });

    it('Delete user findOneAndDelete()', (done) => {
        User.findOneAndDelete({ name: "Joe" })
            .then(() => {
                return User.findOne({ name: "Joe" });
            })
            .then((user) => {
                assert(user == undefined);
                done();
            });
    });


    it('Delete user by delete()', (done) => {
        joe.delete()
            .then(() => {
                return User.findOne({ name: "Joe" });
            })
            .then((user) => {
                assert(user == undefined);
                done();
            });
    });

    it('Delete user by DeleteMany()', (done) => {
        User.deleteMany({name:"Joe"})
            .then(() => {
                return User.findOne({ name: "Joe" });
            })
            .then((user) => {
                assert(user == undefined);
                done();
            });
    });
});