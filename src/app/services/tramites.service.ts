import { Injectable } from "@angular/core"
import { type Observable, of } from "rxjs"

export interface Tramite {
  id: string
  titulo: string
  descripcionCorta: string
  descripcionCompleta: string
  requisitos: string[]
  documentacion: string[]
  imagen: string
}

@Injectable({
  providedIn: "root",
})
export class TramitesService {
  private tramites: Tramite[] = [
    {
      id: "memoria-democratica",
      titulo: "Memoria Democrática",
      descripcionCorta: "Orientada a descendientes (nietos) de ciudadanos originariamente Españoles.",
      descripcionCompleta:
        "La Ley de Memoria Democrática permite a los descendientes de españoles adquirir la nacionalidad española. Este trámite está orientado a nietos de ciudadanos originariamente españoles que perdieron o tuvieron que renunciar a la nacionalidad española como consecuencia del exilio.",
      requisitos: [
        "Ser descendiente de español/a de origen",
        "Demostrar el vínculo familiar con documentación oficial",
        "Presentar la solicitud dentro del plazo establecido por la ley",
      ],
      documentacion: [
        "Formulario de solicitud",
        "Certificado de nacimiento del solicitante",
        "Certificado de nacimiento del padre/madre español/a",
        "Certificado de nacimiento del abuelo/a español/a",
        "Documentación que acredite el exilio",
      ],
      imagen: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "residencia-no-lucrativa",
      titulo: "Residencia No Lucrativa",
      descripcionCorta: "Orientada a personas que quieran residir legalmente en España sin necesidad de trabajar.",
      descripcionCompleta:
        "La residencia no lucrativa está dirigida a extranjeros que desean residir en España y cuentan con medios económicos suficientes para hacerlo sin realizar actividades laborales o profesionales. El solicitante debe demostrar que dispone de recursos suficientes para mantenerse durante el periodo de residencia.",
      requisitos: [
        "No ser ciudadano de un Estado de la Unión Europea",
        "No encontrarse irregularmente en territorio español",
        "Carecer de antecedentes penales",
        "Disponer de medios económicos suficientes",
        "Contar con un seguro público o privado de enfermedad",
      ],
      documentacion: [
        "Formulario de solicitud de visado",
        "Pasaporte con vigencia mínima de un año",
        "Certificado de antecedentes penales",
        "Certificado médico",
        "Documentación que acredite los medios económicos",
        "Seguro médico",
      ],
      imagen: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "visa-trabajo",
      titulo: "Visa de Trabajo",
      descripcionCorta: "Para personas que desean ir de forma legal a residir y trabajar por cuenta ajena en España.",
      descripcionCompleta:
        "La visa de trabajo permite a los extranjeros residir y trabajar legalmente en España por cuenta ajena. El empleador en España debe iniciar el proceso solicitando la autorización de residencia y trabajo para el extranjero.",
      requisitos: [
        "Tener una oferta de trabajo en España",
        "No ser ciudadano de un Estado de la Unión Europea",
        "No encontrarse irregularmente en territorio español",
        "Carecer de antecedentes penales",
      ],
      documentacion: [
        "Formulario de solicitud de visado",
        "Pasaporte con vigencia mínima de un año",
        "Certificado de antecedentes penales",
        "Certificado médico",
        "Contrato de trabajo firmado",
        "Autorización de residencia y trabajo tramitada por el empleador",
      ],
      imagen: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "reagrupacion-familiar",
      titulo: "Reagrupación Familiar de Comunitario",
      descripcionCorta: "Destinado para familiares de ciudadanos españoles o comunitarios.",
      descripcionCompleta:
        "La reagrupación familiar permite a los familiares de ciudadanos españoles o de la Unión Europea residir legalmente en España. Está destinada a cónyuges, hijos menores de 21 años y ascendientes dependientes de un español o ciudadano comunitario.",
      requisitos: [
        "Ser familiar de un ciudadano español o de la Unión Europea",
        "Acreditar el vínculo familiar",
        "En caso de ascendientes, demostrar la dependencia económica",
        "No tener prohibida la entrada en España",
      ],
      documentacion: [
        "Formulario de solicitud",
        "Pasaporte completo",
        "Documentación que acredite el vínculo familiar",
        "Documentación que acredite la dependencia económica (para ascendientes)",
        "Certificado de registro del ciudadano de la Unión",
      ],
      imagen: "/placeholder.svg?height=300&width=400",
    },
  ]

  constructor() {}

  getTramites(): Observable<Tramite[]> {
    return of(this.tramites)
  }

  getTramite(id: string): Observable<Tramite | undefined> {
    return of(this.tramites.find((tramite) => tramite.id === id))
  }
}

