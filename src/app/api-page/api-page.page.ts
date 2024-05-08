import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton } from '@ionic/angular/standalone';
import { GameServiceService } from '../Services/game-service.service';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.page.html',
  styleUrls: ['./api-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons
    , IonButton
  ]
})
export class ApiPagePage implements OnInit {
  //Variables for getting the individual API segments
  elements:any=[];
  userChoice:String = "";
  classList:boolean = false;
  raceList:boolean = false;
  spellList:boolean = false;
  monsterList:boolean = false;

  constructor(private gameService:GameServiceService) { }

  //Getting the info for each piece of information
  ngOnInit(): void {
    this.gameService.GetDNDData(this.userChoice).subscribe(
      (data)=>{
        this.elements = data.results;
      }
    )
  }

  //Method for the button being clicked, registering the field they want to see and doingit
  chooseInfo(field: String){
    this.userChoice = field;
    this.gameService.GetDNDData(this.userChoice).subscribe(
      (data)=>{
        this.elements = data.results;
      }
    )
    //Depending on the button pushed the appropriate section is displayed
    if(this.userChoice == "classes/")
    {
      this.classList = true;
      this.raceList = false;
      this.spellList = false;
      this.monsterList = false;
    }
    else if (this.userChoice == "races/")
    {
      this.classList = false;
      this.raceList = true;
      this.spellList = false;
      this.monsterList = false;
    }
    else if (this.userChoice == "spells/")
    {
      this.classList = false;
      this.raceList = false;
      this.spellList = true;
      this.monsterList = false;
    }
    else
    {
      this.classList = false;
      this.raceList = false;
      this.spellList = false;
      this.monsterList = true;
    }
  }

}
