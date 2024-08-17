import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TareasComponent } from './tareas/tareas.component';
import { UserComponent } from './user/user.component';
import { DeferComponent } from './defer/defer.component';

export const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'defer', component: DeferComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
