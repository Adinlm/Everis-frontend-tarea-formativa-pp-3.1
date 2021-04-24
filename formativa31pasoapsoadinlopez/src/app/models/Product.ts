export class Producto {
    code: string;
    name: string;
    price: number;
    description: string;

    constructor(code: string, name: string, price: number, description: string) {
        this.code = code;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}