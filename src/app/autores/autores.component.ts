import { FormGroup, FormBuilder} from '@angular/forms';
import {Component,OnInit} from '@angular/core';

@Component({  
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  public autoform: FormGroup;
  constructor(protected fb: FormBuilder) { }
  ngOnInit() {
  }
  createfrom(){
    this.autoform=this.fb.group({
    
      codigo: '',
      nombre: '',
      fec_nac: '',
    });
  }
  
}
