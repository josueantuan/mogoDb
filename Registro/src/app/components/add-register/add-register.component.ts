import { Component, OnInit } from '@angular/core';
import { registro } from "../../Models/registro";
//Importar Servicio
import { RegistrosService } from "../../services/registros.service";
@Component({
  selector: 'app-add-register',
  templateUrl: './add-register.component.html',
  styleUrls: ['./add-register.component.css']
})
export class AddRegisterComponent implements OnInit {
  registros: registro[];
  name: string;
  ced: string;
  telf: string;
  constructor( private registroService:RegistrosService) {
      this.registroService.getTasks()
      .subscribe(registros =>{
        this.registros = registros;
        console.log(registros);
      });
   }

  ngOnInit() {
  }
  addRegist(event){
    event.preventDefault();
    const newRegister: registro = {
      name: this.name,
      ced: this.ced,
      telf: this.telf
    };
    this.registroService.addTask(newRegister).subscribe(registro => {
      this.registros.push(registro);
      console.log(this.registros);
    })
    this.name="";
    this.ced="";
    this.telf="";
  }
  deleteRegister(id){

    this.registroService.deleteTask(id)
    .subscribe(data => {
      if(data.n == 1){
        for(let i=0; i < this.registros.length;i++){
          if(this.registros[i]._id == id){
            this.registros.splice(i,1);
          }
        }
      }
    }); 
  }
}
