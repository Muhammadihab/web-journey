class Customer {
    static statuses = ["مهتم", "اشترى", "مش مهتم"]
    constructor(name, status) {
        this.name = name;
        this.status = status;


    }
    set status(newStatuses) {
        if (Customer.statuses.includes(newStatuses)) {
            this._status = newStatuses;
        }
        else {
            console.error("this doe not exist");
        }

    }
    get status() {
        return this._status;
    }
    buy() {
        this.status = "اشترى";
    }
}
const c = new Customer("Ali", "مهتم");

c.status = "بطاطس";
console.log(c.status);

c.buy();
console.log(c.status);

console.log(Customer.statuses);


class VipCustomer extends Customer {
    constructor(name, status, discount) {
        super(name, status);
        this.discount = discount;
    }
}
const v = new VipCustomer("Sara", "مهتم", 20);
console.log(v);
v.buy();
console.log(v.status);
