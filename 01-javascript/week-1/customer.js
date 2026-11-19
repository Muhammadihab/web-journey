// let customers = [{ name: "Ali", phone: "0175234", price: 100000, deposit: 1220, years: 5 },
// { name: "Ahmed", phone: "0123564", price: 1000060, deposit: 12270, years: 5 },
// { name: "Muhammad", phone: "017234", price: 1050000, deposit: 134220, years: 5 },
// { name: "Andy", phone: "0102364", price: 1000040, deposit: 122320, years: 5 },
// { name: "Kareem", phone: "012354", price: 1003000, deposit: 12520, years: 5 },
// { name: "Gaafar", phone: "012334", price: 1020000, deposit: 14220, years: 5 },
// { name: "zozo", phone: "0123", price: 1000030, deposit: 12250, years: 0 },
// { name: "shawkat", phone: "0134", price: 1000020, deposit: 12420, years: 5 },
// { name: "saed", phone: "0124", price: 1000001, deposit: 12203, years: 5 },
// { name: "elbolbol", phone: "0234", price: 10000, deposit: 12202, years: 5 },
// ]
// function searchCustomers(name) {


//     return customers.filter(function (customer) {
//         return customer.name.toLowerCase().includes(name.toLowerCase()) || customer.phone.includes(name);
//     });

// }


// function monthlyInstallment(name) {
//     if (name.price - name.deposit < 0 || name.years <= 0) {
//         return 0;
//     }

//     let installment = Math.round((name.price - name.deposit) / (name.years * 12));
//     return installment;


// }
// let installment = customers.map(monthlyInstallment);
// console.log(installment);
// console.log(100 / 0);
// console.log(searchCustomers("ali"));
// console.log(searchCustomers("010"));
// console.log(searchCustomers("xyz"));
