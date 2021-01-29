import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';





@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
  })
  export class LandingComponent implements OnInit {
  
  
    constructor(

    ) {
    }
    
    ngOnInit() { 
    }
   
}