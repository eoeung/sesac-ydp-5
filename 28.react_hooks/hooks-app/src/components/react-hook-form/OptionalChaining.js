// Optional Chaining (옵셔널 체이닝)
const user = {};
const user2 = { name: 'apple' };

console.log(user && user.address && user.name);
console.log(user?.address?.name);

console.log(user2)
console.log(user2?.name)
console.log(user2 && user2.address && user2.name);
console.log(user2?.address?.name);
console.log(user2?.name?.address);