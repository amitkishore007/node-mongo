const assert = require('assert');
const User = require('../src/user');

describe('Update the user', ()=>{
    let joe;
    beforeEach((done) => {
        joe = new User({ name: 'Joe', postCount: 22 });
        joe.save()
            .then(() => {
                done();
            });
    });

    it('Update one by user model', (done)=>{
        User.updateOne({name:'Joe'},{name:'Alex'})
            .then(()=>{
                return User.findOne({name:'Alex'});
            })
            .then((user)=>{
                assert(user.name==='Alex');
                done();
            });
    });


    it('Update Many by user model', (done) => {
        User.updateMany({ name: 'Joe' }, { name: 'Alex' })
            .then(() => {
                return User.findOne({ name: 'Alex' });
            })
            .then((user) => {
                assert(user.name === 'Alex');
                done();
            });
    });

    it('Update by instance set and save', (done) => {
       joe.set('name','Alex');
       joe.save()
          .then(()=>{
              return User.findOne({name:"Alex"});
          })
          .then((user)=>{
            assert(user.name == 'Alex');
            done();
          });
    });

});