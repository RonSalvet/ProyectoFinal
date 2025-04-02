import { Component } from "@angular/core"
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { CommonModule } from "@angular/common"

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactForm: FormGroup
  submitted = false
  messageSent = false

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      asunto: ["", Validators.required],
      mensaje: ["", Validators.required],
    })
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Construir mensaje para WhatsApp
      const phoneNumber = '+59177045885'; // Reemplaza con tu número de teléfono (incluir código de país)
      const message = `*Nuevo mensaje de contacto*
        *Nombre:* ${formData.nombre}
        *Email:* ${formData.email}
        *Asunto:* ${formData.asunto}
        *Mensaje:* ${formData.mensaje}`;

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');

      this.messageSent = true;
      this.contactForm.reset();
      this.submitted = false;

      setTimeout(() => {
        this.messageSent = false;
      }, 5000);
    }
  }
}