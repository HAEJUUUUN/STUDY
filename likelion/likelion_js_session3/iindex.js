const me = {
    name: "소희",
    age: 23,
    gender: 'female',
};

const someone = {
    name: "누군가",
    age: 27,
    gender: 'male',
};

function addMilitaryStateIfFemale(person) {
    if (person.gender === 'female') {
        person.militaryState = false;
    }
}

addMilitaryStateIfFemale(me);
addMilitaryStateIfFemale(someone);

console.log(me);
console.log(someone);

function parseBoolean(value) {
    if (value === true) {
        return "참";
    } else if (value === false) {
        return "거짓";
    }
}

if(me.militaryState !== undefined) {
    console.log(parseBoolean(me.militaryState));
}
if(me.militaryState !== undefined) {
    console.log(parseBoolean(someone.militaryState));
}

// 위와 같은 기능을 하는 코드
// me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));
// someone.militaryState !== undefined && console.log(parseBoolean(me.militaryState));


// 비구조화 할당
const meme = {
    namee: "소희",
    agee: 23,
};

const {namee} = meme;  // const namee = meme.namee; 와 같음

console.log(namee);
console.log(namee);
console.log(namee);
console.log(namee);
console.log(namee);


// 스프레드
const mememe = {
    nameee: "소희",
    ageee: 23,
};

const militaryMe = {
    ...mememe,
    MilitaryState: false,
}

console.log(militaryMe);


// 레스트
const memememe = {
    nameeee: "소희",
    ageeee: 23,
    militarystate: false,
}

const { militarystate, ...another } = memememe;
console.log(another);

const numbers = [0,1,2,3,4,5,6];
const [zero, ...rest] = numbers;
console.log(rest);

