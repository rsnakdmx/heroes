import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-filtrado',
  templateUrl: './heroe-filtrado.component.html',
  styleUrls: ['./heroe-filtrado.component.css']
})
export class HeroeFiltradoComponent implements OnInit {

  heroe:any = [];

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) 
  { 
      this.activatedRoute.params.subscribe(params => 
      {   
          this.heroe = this._heroesService.getHeroeFiltrado(params['id']);
      });
  }

  ngOnInit() {  }
}
