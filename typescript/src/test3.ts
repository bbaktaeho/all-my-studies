interface User {
    name: string;
}
interface Product {
    id: string;
    price: number;
}
class Cart {
    constructor(public user: User, private store: object = {}) {}

    put(id: string, product: Product) {
        this.store[id] = product;
    }
    get(id: string) {
        return this.store[id];
    }
}

class PromotionCart extends Cart {
    addPromotion() {}
}

const cart = new PromotionCart({ name: 'bbak' });
