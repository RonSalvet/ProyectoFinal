import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ServiciosDetallesComponent } from './pages/servicios-detalles/servicios-detalles.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent, title: "Inicio - Servicios Consulares" },
    { path: "servicios", component: ServiciosComponent, title: "Servicios - Servicios Consulares" },
    { path: "tramites/:id", component: ServiciosDetallesComponent, title: "Detalles del Trámite - Servicios Consulares" },
    { path: "contacto", component: ContactoComponent, title: "Contacto - Servicios Consulares" },
    { path: "**", component: HomeComponent, title: "Inicio - Servicios Consulares" } // Redirige a HomeComponent para cualquier ruta no encontrada
];
