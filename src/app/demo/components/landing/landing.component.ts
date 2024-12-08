import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit{
    currentYear: string;
    tab = 0;
    email!: FormControl;
    name!: FormControl;
    message!: FormControl;
    phoneNumber!: FormControl;
    enquireForm!: FormGroup;
    disableForm = false;
    constructor(public layoutService: LayoutService, public router: Router) { 
        this.currentYear = new Date().getFullYear().toString();
    }

    ngOnInit(): void {
        this.createForm();
    }
 
    scrollToAnchor(location: string, wait: number): void {
        const element = document.querySelector('#' + location)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
          }, wait)
        }
      }

      createForm() {
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.name = new FormControl('', [Validators.required]);
        this.phoneNumber = new FormControl('', [Validators.required]);
        this.message = new FormControl('', [Validators.required]);
        this.enquireForm = new FormGroup({
          email: this.email,
          name: this.name,
          phoneNumber: this.phoneNumber,
          message: this.message,
        });
      }

      submitForm() {
        console.log(1)
      }
}