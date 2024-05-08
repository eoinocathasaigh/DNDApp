import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton } from '@ionic/angular/standalone';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-web',
  templateUrl: './web.page.html',
  styleUrls: ['./web.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton,
    IonButton, IonButtons
  ]
})
export class WebPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Routing the user to the various pages based on the button they click
  //This method recieves a value from the button clicked and will takes the user to the corrseponding
  //web page
  async moveToPage(where:String){
    if(where == "begin"){
      await Browser.open({ url: 'https://5e.tools/book.html#phb' });
    }
    else if(where == "dm"){
      await Browser.open({ url: 'https://5e.tools/book.html#dmg' });
    }
    else if(where == "monster"){
      await Browser.open({ url: 'https://5e.tools/book.html#mm' });
    }
    else if(where == "otherworld"){
      await Browser.open({ url: 'https://5e.tools/book.html#mpmm' });
    }
    else if(where == "dragon"){
      await Browser.open({ url: 'https://5e.tools/book.html#ftd' });
    }
    else if(where == "chaos"){
      await Browser.open({ url: 'https://5e.tools/book.html#scc' });
    }
    else if(where == "adventure"){
      await Browser.open({ url: 'https://5e.tools/book.html#scag' });
    }
    else if(where == "explore"){
      await Browser.open({ url: 'https://5e.tools/book.html#egw' });
    }
    else if(where == "inspire"){
      await Browser.open({ url: 'https://5e.tools/book.html#tdcsr,0' });
    }
  }

}
