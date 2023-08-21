// JSON
const car = `{
    "model": "IONIQ 5",
    "company": "HYUNDAI",
    "price": 50000000,
    "year": 2023,
    "isElectricCar": true,
    "options": ["side mirror", "smart sensor", "built-in cam" ]
}`;

// JSON내장 객체의 parse랑 stringify
let jp = JSON.parse(car);
console.log(jp);
// {
//     model: 'IONIQ 5',
//     company: 'HYUNDAI',
//     price: 50000000,
//     year: 2023,
//     isElectricCar: true,
//     options: [ 'side mirror', 'smart sensor', 'built-in cam' ]
//   }

let js = JSON.stringify(jp);
console.log(js);
// {"model":"IONIQ 5","company":"HYUNDAI","price":50000000,"year":2023,"isElectricCar":true,"options":["side mirror","smart sensor","built-in cam"]}
