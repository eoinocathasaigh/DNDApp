import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton,
  IonItem, IonLabel, IonSelect, IonSelectOption, IonInput, IonList, IonText
} from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // This allows me to implement the slider for images


@Component({
  selector: 'app-build',
  templateUrl: './build.page.html',
  styleUrls: ['./build.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA], //Allows me to use the cycling image slider
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons
    ,IonButton, IonItem, IonLabel, IonSelect, IonSelectOption, IonInput, IonList, IonText
  ]
})
export class BuildPage implements OnInit {

  //Variables for user to build their character 
  character: any = {};
  availableSpells: string[] = ['Fireball', 'Magic Missile', 'Healing Touch', 'Invisibility', 'Lightning Bolt', 'Ray of Harm', 'Thunderous Smite', 'Divine Smite', 'Speak with Dead', 'Firebolt'];
  selectedSpells: string[] = [];
  loadedCharacter: any = null;

  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  //Saving the character with all of the fields selected by the user
  async saveCharacter() {
    try {
      //Variable to store all the info about 
      var characterData = {
        character: this.character,
        spells: this.selectedSpells
      };

      // Save character data to storage
      await this.storage.set('characterData', characterData);
      console.log('Character saved to Ionic Storage:', characterData);
      alert("Character Saved!");

    } catch (error) {
      console.error('Error saving character:', error);
    }
  }

  //Creating storage space for the charater to be stored at
  async ionViewWillEnter(){
    await this.storage.create();
  }

  //Loading in the details for the character after the user has saved them
  async loadCharacter() {
    try {
      const characterData = await this.storage.get('characterData');
      if (characterData) {
        this.loadedCharacter = characterData; // Set loadedCharacter variable so we can use them
        console.log('Character loaded from Ionic Storage:', characterData);
      } else {
        console.log('No character data found.');
      }
    } catch (error) {
      console.error('Error loading character:', error);
    }
  }

  //Clearing the form - setting all the variables to empty
  resetForm(){
    this.character = {};
    this.selectedSpells = [];
  }

  updateSelectedSpells() {
    // Ensure that the user can select a maximum of 5 spells
    if (this.selectedSpells.length > 5) {
      this.selectedSpells = this.selectedSpells.slice(0, 5);
    }
  }
}
