import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{


  


  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  termino: string = "";

  debouncer: Subject<string> = new Subject();

  @Input() placeholder = "";


  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) =>  {
        this.onDebounce.emit( value );
    });
  }

  search(){
    this.onEnter.emit( this.termino );

  }

  pressedKey() {
    this.debouncer.next( this.termino );
  }
}
