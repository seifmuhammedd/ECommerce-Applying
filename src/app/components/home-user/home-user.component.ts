import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RecipesService } from '../../core/services/recipes.service';
import { IRecipe } from '../../core/interfaces/irecipe';

@Component({
  selector: 'app-home-user',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.css'
})
export class HomeUserComponent {

  constructor ( private _RecipesService:RecipesService ) {}

  ngOnInit(): void {
    this._RecipesService.getRecipes("pizza").subscribe({
        next: (res)=>{
          this.recipesData = res.recipes
        },
        error: (err)=>{
          console.log(err)
        }
      })
    }
  
    recipesData !: IRecipe[]


  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 2000,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: true
  }

  subSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 2000,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: true
  }

  }
