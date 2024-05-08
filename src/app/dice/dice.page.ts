import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.page.html',
  styleUrls: ['./dice.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton,
    IonButtons, IonButton]
})
export class DicePage implements OnInit {

  //Variables for handling the various dice rolls of this page
  diceRoll:number = 0;

  constructor() { }

  ngOnInit() {
  }

  //Rolling the dice, depending on the button pressed by the user, an appropriate random number is generated
  rollDice(numSides:String){
    if(numSides == "20"){
      this.diceRoll = Math.random() * 20;
      this.diceRoll = parseInt(this.diceRoll.toFixed(0));//The number is rounded, no decimal is included
    }
    else if(numSides == "12"){
      this.diceRoll = Math.random() * 12;
      this.diceRoll = parseInt(this.diceRoll.toFixed(0));
    }
    else if(numSides == "8"){
      this.diceRoll = Math.random() * 8;
      this.diceRoll = parseInt(this.diceRoll.toFixed(0));
    }
    else if(numSides == "4"){
      this.diceRoll = Math.random() * 4;
      this.diceRoll = parseInt(this.diceRoll.toFixed(0));
    }
    else if(numSides == "100"){
      this.diceRoll = Math.random() * 100;
      this.diceRoll = parseInt(this.diceRoll.toFixed(0));
    }
  }

}
