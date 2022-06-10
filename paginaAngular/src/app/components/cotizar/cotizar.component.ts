import { Component, ElementRef, OnInit,Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { cotizar } from 'src/app/models/cotizar';
import { CotizarService } from 'src/app/services/cotizar.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cotizar',
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.css']
})
export class CotizarComponent implements OnInit {

@ViewChild ("imagen") imagenHTML?:ElementRef
@ViewChild ("boton") botonHTML?: ElementRef


  cotizarForm: FormGroup;

  regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  regexNumero = /^[0-9]+$/;
  id: string | null;
  titulo_fomulario = "Solicitar Cotizacion"

  constructor(private fb: FormBuilder,
    private _cotizarService: CotizarService,
    private router: Router,
    private idRoute: ActivatedRoute,
    private renderer2: Renderer2,

  ) {
    this.cotizarForm = this.fb.group({
      nombre: ["", [Validators.required]],
      celular: ["", [Validators.required, Validators.pattern(this.regexNumero)]],
      correo: ["", [Validators.required, Validators.pattern(this.regexCorreo)]],
      mensaje: ["", [Validators.required]]
    })
    this.id = this.idRoute.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.accionSolicitada();
  }

  guardarContacto() {
    const contactoUsuario: cotizar = {
      nombre: this.cotizarForm.get("nombre")?.value,
      celular: this.cotizarForm.get("celular")?.value,
      correo: this.cotizarForm.get("correo")?.value,
      mensaje: this.cotizarForm.get("mensaje")?.value
    }
    console.log(contactoUsuario)

    if (this.id !== null) {
      this._cotizarService.putContacto(this.id, contactoUsuario).subscribe(data => {
        this.router.navigate(['admin'])
        Swal.fire({
          title: 'cotizacion actualizada!',
          text: 'Se guardaron los cambios en la solicitud',
          icon: 'success',
          confirmButtonText: 'Vale'
        })
      }, error => {})
    } else {
      this._cotizarService.postContacto(contactoUsuario).subscribe(data => {
        this.router.navigate([`/mensaje-enviado`])
      }, error => {
        console.log(error)
      })
    }
  }

    accionSolicitada(){
      if (this.id !== null) {
        this.titulo_fomulario = "Actualizar mensaje";
        this._cotizarService.getContacto(this.id).subscribe(data => {
          this.cotizarForm.setValue({
            nombre: data.nombre,
            correo: data.correo,
            celular: data.celular,
            mensaje: data.mensaje
          })
        }, error => {
          console.log(error)
        }
        )
      }
    }
    cambio(mensaje:string =  "Hola amigo"){
      const cambioImagen = this.imagenHTML?.nativeElement
      this.renderer2.setAttribute(cambioImagen, "src", "assets/" )
    } 
  }


