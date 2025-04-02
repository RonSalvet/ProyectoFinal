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
    this.submitted = true

    if (this.contactForm.valid) {
      // Aquí iría la lógica para enviar el formulario
      console.log("Formulario enviado:", this.contactForm.value)
      this.messageSent = true
      this.contactForm.reset()
      this.submitted = false

      // Ocultar el mensaje después de 5 segundos
      setTimeout(() => {
        this.messageSent = false
      }, 5000)
    }
  }
}