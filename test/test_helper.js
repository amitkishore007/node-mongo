const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/basic_mongo', { useNewUrlParser:true});
mongoose.connection
        .once('open',()=>{ console.log('We are good to go !'); })
        .on('error',(error)=>{
            console.warn('Warning...', error);
        });

beforeEach((done)=>{
    mongoose.connection.collections.users.drop(()=>{
        done();
    });
});