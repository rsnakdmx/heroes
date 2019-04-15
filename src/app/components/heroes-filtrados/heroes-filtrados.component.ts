import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-filtrados',
  templateUrl: './heroes-filtrados.component.html',
  styleUrls: ['./heroes-filtrados.component.css']
})
export class HeroesFiltradosComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private _heroesService:HeroesService, private _activateRoute:ActivatedRoute, private _router:Router) {  }

  ngOnInit()
  {
    this._activateRoute.params.subscribe( params => 
    {   
        if (params['termino'] === '')
        {
            this.termino = this._heroesService.getTermino();
            this.heroes = this._heroesService.getHeroesFiltrados();
        }

        else
        {
            this.termino = params['termino'];
            this.heroes = this._heroesService.buscarHeroes(params['termino']);
        }
    });
  }

  verHeroe(idx:number)
  {
      this._router.navigate(['/heroeFiltrado', idx]);
  }
}
