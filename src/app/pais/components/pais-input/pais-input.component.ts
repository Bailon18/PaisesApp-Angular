import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  // styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{

  termino: string = '';
  @Input() holder: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  // debouncer -> se activa cuando la persona deja de escribir
  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    
    this.debouncer
      .pipe(
        debounceTime(300))
      .subscribe( valor => {
        //console.log('debounce ', valor);
        this.onDebounce.emit(valor);
      })
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada(){
    this.debouncer.next( this.termino );
  }
}
