import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton,  } from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // This allows me to implement the slider for images

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterLinkWithHref,
  ],
})
export class HomePage {
  constructor() {}
}
