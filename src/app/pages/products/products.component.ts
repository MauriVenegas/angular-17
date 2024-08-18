import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  loading: boolean = true
  products: IProduct[] = []

  private _apiService = inject(ApiService)
  private _router = inject(Router)

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      this.products = data
      this.loading = false
    })
  }

  navegate(id: number): void {
    this._router.navigate(['/products', id])
  }
}
