import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './home/main.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryItemComponent } from './category-item/category-item.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: MainComponent},
    { path: 'cat',  component: CategoriesComponent },
    { path: 'cat/:name', component: CategoryItemComponent }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
