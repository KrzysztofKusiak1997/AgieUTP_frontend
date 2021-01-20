import { Component, OnInit } from '@angular/core';
import { ProjektService } from '../service/projekt.service';
import { Projekt } from '../projekt';

@Component({
  selector: 'app-lista-projektow',
  templateUrl: './lista-projektow.component.html',
  styleUrls: ['./lista-projektow.component.css']
})
export class ListaProjektowComponent implements OnInit {

  projekt: Projekt[];

  constructor(private projektService: ProjektService,
              ) { }

  ngOnInit() {
      this.getProjekty();
    }

    getProjekty(): void {
      this.projektService.getProjekt()
          .subscribe(projekt => this.projekt = projekt);
    }
}
