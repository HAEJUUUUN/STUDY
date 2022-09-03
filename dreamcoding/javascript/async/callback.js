'use strict';

// Javascript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// Callback Hell example
class UserStorage {
    loginUser(id, passward, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'sohui' && passward === 'haejun') ||
                (id === 'seoyoung' && passward === 'mumu')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'sohui') {
                onSuccess({ name: 'sohui', role: 'admin'});
            } else {
                onError(new Error('not access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const passward = prompt('enter your passward');
userStorage.loginUser(
    id, 
    passward, 
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you are a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
            );
    }, 
error => {
    console.log(error);
    }
);
