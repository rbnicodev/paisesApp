import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() results: Country[] = [];
  displayedColumns: string[] = ['position', 'name', 'capital', 'population', 'flag', 'star'];
}
