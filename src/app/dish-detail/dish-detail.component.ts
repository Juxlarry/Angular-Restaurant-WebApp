import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router'; 
import { Location } from '@angular/common';
import { Dish } from '../shared/dish'; 
import { DishService } from '../services/dish.service';



@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {


  dish :Dish; 

  constructor(private dishService:DishService,
    private route : ActivatedRoute, 
    private location: Location) { }

  ngOnInit(){
    let id = this.route.snapshot.params['id'];
    this.dishService.getDish(id)
      .subscribe(dish =>  this.dish = dish); 
  }

  getBack(): void {
    this.location.back(); 
  }

}
