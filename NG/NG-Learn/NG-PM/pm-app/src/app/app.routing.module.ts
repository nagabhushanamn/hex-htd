import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { ProductListResolverService } from './product-list-resolver.service';
import { ProductFormComponent } from './product-form/product-form.component';

import { ReactiveFormsModule } from '@angular/forms'
import { ProductFormResolverService } from './product-form-resolver.service';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'products',
        component: ProductListComponent,
        resolve: {
            products: ProductListResolverService
        }
    },
    { path: 'product-new', component: ProductFormComponent },
    {
        path: 'product-edit/:id',
        component: ProductFormComponent,
        resolve: {
            product: ProductFormResolverService
        }
    },
    { path: '**', component: NotFoundComponent }
];


@NgModule({
    declarations: [
        HomeComponent,
        NotFoundComponent,
        ProductListComponent,
        ProductFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [
        ProductService,
        ProductListResolverService,
        ProductFormResolverService
    ],
})
export class AppRoutingModule { }
