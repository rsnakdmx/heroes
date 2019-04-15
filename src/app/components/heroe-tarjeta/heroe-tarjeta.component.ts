import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-heroe-tarjeta',
    templateUrl: './heroe-tarjeta.component.html',
    styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
    @Input() heroe:any = {};
    @Input() index:number;

    @Output() heroeSelecc:EventEmitter<number>;

    constructor() 
    {
        this.heroeSelecc = new EventEmitter();
    }

    ngOnInit() {  }

    verHeroe()
    {
        this.heroeSelecc.emit(this.index);
    }
}
