import { Component, OnInit } from '@angular/core';
import { cotizar } from 'src/app/models/cotizar';
import { CotizarService } from 'src/app/services/cotizar.service';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-dahsboard',
  templateUrl: './dahsboard.component.html',
  styleUrls: ['./dahsboard.component.css']
})
export class DahsboardComponent implements OnInit {

  listaContactos: cotizar [] = []

constructor(private _CotizarService: CotizarService) { }

  ngOnInit(): void {
    this.obtenerContactos()
  }
  obtenerContactos() {
    this._CotizarService.getContactos().subscribe(data =>{
      this.listaContactos = data
    },error=> {
      console.log(error)
        })
    }

    borrarContacto(id:any) {
    Swal.fire({
      title: 'desea eliminar el contacto?',
      text: "esta accion no sera reversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this._CotizarService.deleteContacto(id).subscribe(data => {
          Swal.fire({
            icon: 'success',
            title: 'el dato se elimino'
          })
          this.obtenerContactos()
            }, error =>{
                console.log(error)
            })
          }
        })
      }
    }
