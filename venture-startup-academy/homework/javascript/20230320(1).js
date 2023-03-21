var pokemon = {
    name: '치코리타',
    level: 3,
    hp: 80,
    getLevel() {
        return this.level;
    },
    introduce() {
        return `이 포켓몬은 ${pokemon.getLevel()}Lv의 ${pokemon.name}입니다.`;
    },
    restore(hp) {
        console.log(`포켓몬의 체력을 회복합니다.`);
        this.hp = hp + this.hp;
        // return이 없으면 undefined로 출력
    }
};

console.log(`이름: ${pokemon.name}`);
console.log(`레벨: ${pokemon.level}`);
console.log(`체력: ${pokemon.hp}`);

console.log(pokemon.introduce());
pokemon.restore(100);
console.log(`체력: ${pokemon.hp}`);

