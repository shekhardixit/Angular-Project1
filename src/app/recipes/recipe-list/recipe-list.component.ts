import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('A test recipe','This is simple a test', 'https://www.google.com/search?q=recipe&sxsrf=ALeKk0320HP6rRt_hMgTNQo1P1bKsvi_yQ:1622230590971&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiw8fjwj-3wAhXv6XMBHTmaA4YQ_AUoA3oECAEQBQ&biw=1536&bih=722#imgrc=SnEqdOzPfKvxYM')
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
