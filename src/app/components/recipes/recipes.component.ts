import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RecipesService } from '../../core/services/recipes.service';
import { IRecipe } from '../../core/interfaces/irecipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit, OnDestroy {

  constructor ( private _RecipesService:RecipesService ) {}


  recipeFirstSub !: Subscription
  recipeSeconedSub !: Subscription
  
  ngOnInit(): void {
    this.recipeFirstSub = this._RecipesService.getRecipes("pizza").subscribe({
      next: (res)=>{
        this.recipesData = res.recipes
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

  recipesData !: IRecipe[]

  @ViewChild("searchInput") search !: ElementRef
  searchRecipe():void{
    this.recipeSeconedSub = this._RecipesService.getRecipes(this.search.nativeElement.value).subscribe({
      next: (res)=>{
        this.recipesData = res.recipes
        console.log(this.recipesData)
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

  ngOnDestroy(): void {
    this.recipeFirstSub?.unsubscribe
    this.recipeSeconedSub?.unsubscribe
  }
}
