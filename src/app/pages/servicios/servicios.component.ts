import { Component, type OnInit } from '@angular/core';
import { RouterLink } from "@angular/router"
import { CommonModule } from "@angular/common"
import { Tramite, TramitesService } from '../../services/tramites.service';
@Component({
  selector: 'app-servicios',
  imports: [CommonModule, RouterLink],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent implements OnInit {
  tramites: Tramite[] = []

  constructor(private tramitesService: TramitesService) { }

  ngOnInit(): void {
    this.tramitesService.getTramites().subscribe((data) => {
      this.tramites = data
    })
  }
}
