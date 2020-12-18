import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {map, take, tap, exhaustMap} from "rxjs/operators";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  baseUrl = 'https://shopping-app-a9a53.firebaseio.com/';

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
      let url = 'recipes.json';
      const recipes = this.recipeService.getRecipes()
      return this.http.put(this.baseUrl + url, recipes).subscribe(response => {
        console.log(response)
      })
    }

    fetchRecipes() {
      let url = 'recipes.json';
        return this.http.get<Recipe[]>(this.baseUrl + url).pipe(map(recipes => {
        return recipes.map(recipes => {
          return {...recipes, ingredients: recipes.ingredients ? recipes.ingredients : []}
        });
      }),tap(recipes => {
        this.recipeService.setRecipes(recipes)
      }));
    }
}
