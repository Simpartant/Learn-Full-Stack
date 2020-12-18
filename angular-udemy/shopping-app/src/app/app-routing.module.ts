import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";


// @ts-ignore
const appRoute: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes',
            loadChildren: () => import('./recipes/recipes.module').then(e => e.RecipesModule) },
  { path: 'shopping-list',
            loadChildren: () => import('./shopping-list/shopping-list.module').then(e => e.ShoppingListModule ) },
  { path: 'auth',
            loadChildren: () => import('./auth/auth.module').then(e => e.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
