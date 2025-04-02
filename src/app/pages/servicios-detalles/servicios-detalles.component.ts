import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common"
import { ActivatedRoute, Router } from '@angular/router';
import { Tramite, TramitesService } from '../../services/tramites.service';
@Component({
  selector: 'app-servicios-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios-detalles.component.html',
  styleUrl: './servicios-detalles.component.css'
})
export class ServiciosDetallesComponent implements OnInit {
  tramite?: Tramite;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tramitesService: TramitesService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params["id"]
      this.tramitesService.getTramite(id).subscribe((tramite) => {
        this.tramite = tramite
      })
    })
  }

  volver(): void {
    this.router.navigate(["/servicios"])
  }
  solicitarCita(): void {
    if (this.tramite) {
      this.router.navigate(['/contacto'], {
        queryParams: { asunto: `Cita para: ${this.tramite.titulo}` }
      });
    }
  }
}