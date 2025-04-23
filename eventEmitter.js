import { EventEmitter } from 'events'
class MyEmitter extends EventEmitter { }
const emitter = new MyEmitter()

emitter.setMaxListeners(1)  // for limitt 

emitter.on('isLogin', () => {
    console.log('user Login');
})

emitter.on('isLogin', (user1, user2, user3) => {    // we can pass arguments
    console.log('user Login');
    console.log(user1, user2, user3);
})
emitter.emit('isLogin','kevin','edward','snowden')
