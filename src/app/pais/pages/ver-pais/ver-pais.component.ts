import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  // styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

    // ActivatedRoute -> detecta un cambio en la ruta
    pais!: Pais;

    constructor(
        private activatedRoute: ActivatedRoute,
        private paisService: PaisService,
        ) { }

    ngOnInit(): void {
        // this.activatedRoute.params
        //     .subscribe( ({ id }) => {
        //         this.paisService.buscarPorAlpha( id )
        //             .subscribe( pais => {
        //                 console.log(pais);
        //             })
        //     })
        this.activatedRoute.params
            .pipe(
                switchMap( ({ id }) => this.paisService.buscarPorAlpha( id ) )
            )
            .subscribe( pais =>this.pais = pais)
    }

}
