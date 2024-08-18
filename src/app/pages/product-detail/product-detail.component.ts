import { Component, inject } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product?: IProduct
  products: IProduct[] = []
  loading: boolean = true
  color: string = ''
  constructor() { }

  private _route = inject(ActivatedRoute)
  private _location = inject(Location)
  private _apiService = inject(ApiService)

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      this.products = data
    })

    // Obtiene el parámetro pasado por la url
    this._route.params.subscribe({
      next: (params: Params) => {
        const id: number = Number(params['id'])
        this._apiService.getProductById(id).subscribe({
          next: (data: IProduct) => {
            this.product = data
            this.color = this.product?.price as number > 100 ? 'red' : ''
            this.loading = false
          },
          error: (error: any) => {
            console.log(error)
            this.loading = false
          },
        })
      }
    })
  }

  goBack(): void {
    this._location.back()
  }

}
