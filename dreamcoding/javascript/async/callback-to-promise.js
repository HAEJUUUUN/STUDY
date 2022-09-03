// Callback Hell example 변경
class UserStorage {
    loginUser(id, passward) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            if (
                (id === 'sohui' && passward === 'haejun') ||
                (id === 'seoyoung' && passward === 'mumu')
            ) {
                resolve(id);
            } else {
                reject(new Error('not found'));
            }
        }, 2000);
        });
    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            if(user === 'sohui') {
                resolve({ name: 'sohui', role: 'admin'});
            } else {
                reject(new Error('not access'));
            }
        }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const passward = prompt('enter your passward');
userStorage
    .loginUser(id, passward)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you are a ${user.role} role`))
    .catch(console.log);

