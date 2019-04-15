import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {  }

  buscarHeroe(termino:string)
  {
      if (termino.trim() !== '')
          this._router.navigate(['/heroesFiltrados', termino]);
  }
}
