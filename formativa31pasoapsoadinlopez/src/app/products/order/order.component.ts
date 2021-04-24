import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products!: Producto[];
  quantity: number[];
  total: number = 0;

  constructor() {
    this.products = [
      new Producto('123', 'Super 8', 350, ''),
      new Producto('125', 'Chocman', 800, ''),
      new Producto('125', 'Rolls', 270, ''),
      new Producto('22', 'Coca-cola', 90, ''),
      new Producto('120', 'Tomate', 100, ''),
      new Producto('125', 'Chocapic', 5300, ''),];
    this.quantity = [0, 0, 0, 0, 0, 0];
  }

  ngOnInit(): void {
  }

  add(id: number) {
    this.quantity[id]++;
    this.total += this.products[id].price;
  }

  substract(id: number) {
    if (this.quantity[id] > 0) {
      this.quantity[id]--;
      this.total -= this.products[id].price;
    }
  }

}
