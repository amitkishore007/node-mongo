const assert = require('assert');
const User = require('../src/user');

describe('Creating user in users collection', ()=>{

    it('Saving user save()', (done)=>{
        const user = new User({name:'Amk', postCount:12});
        user.save()
            .then(()=>{
                assert(!user.isNew);
                done();
            })
            .catch((ValidationErrors)=>{
                const { message } = ValidationErrors.errors.name;
                
                console.log(message);
            });
    });

});