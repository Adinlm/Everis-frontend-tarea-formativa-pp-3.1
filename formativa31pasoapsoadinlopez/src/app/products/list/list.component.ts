import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/Product';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products!: Producto[];

  editMode: boolean = false;
  editId = -1;

  form = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    price: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.min(1)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
  });

  constructor() { }

  ngOnInit(): void {
    this.products = [];
  }

  get code() { return this.form.get('code'); }
  get name() { return this.form.get('name'); }
  get price() { return this.form.get('price'); }
  get description() { return this.form.get('description'); }

  addProduct(): void {
    if (this.form.valid) {
      const { code, name, price, description } = this.form.value;
      this.products.push(new Producto(code, name, price, description));
      this.form.reset();
    } else alert("Los datos ingresados no son válidos")
  }

  turnEditMode(id: number) {
    const { code, name, price, description } = this.products[id];
    this.form.setValue({
      code, name, price, description
    })
    this.editMode = true;
    this.editId = id;
  }

  editProduct(): void {
    if (this.editId > -1) {
      const { code, name, price, description } = this.form.value;
      this.products[this.editId] = new Producto(code, name, price, description);
      this.editMode = false;
      this.form.reset();
    }
  }

  removeProduct(id: number): void {
    if (id > -1) {
      const product = this.products[id];
      this.products.splice(id, 1);
      alert(`Se ha eliminado el producto de código: ${product.code}`);
    }
    this.form.reset();
  }
}
