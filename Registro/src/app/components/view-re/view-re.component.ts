import { Component, OnInit } from '@angular/core';
import { registro } from "../../Models/registro";
//Importar Servicio
import { RegistrosService } from "../../services/registros.service";
@Component({
  selector: 'app-view-re',
  templateUrl: './view-re.component.html',
  styleUrls: ['./view-re.component.css']
})
export class ViewReComponent implements OnInit {
  registros: registro[];
  constructor( private registroService:RegistrosService) { 
    this.registroService.getTasks()
    .subscribe(registros =>{
      this.registros = registros;
    });
  }

  ngOnInit() {
  }
  
  deleteRegister(id){
    const registro = this.registros;
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
