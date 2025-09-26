import { Component } from '@angular/core';
import {Doingquests} from'../doingquests';
@Component({
  selector: 'app-quests',
  imports: [],
  templateUrl: './quests.html',
  styleUrl: './quests.css'
})


  export class Quests {
    quests:Doingquests [] = [
      { id: 1, title: 'Zachráň dedinu', description: 'Poraz zlého draka a zachráň dedinu.', xp: 120 },
      { id: 2, title: 'Nájsť stratený meč', description: 'Nájsť legendárny meč v lese.', xp: 45 },
      { id: 3, title: 'Získať byliny', description: 'Zbierať liečivé byliny pre liečiteľa.', xp: 30 },
      { id: 4, title: 'Poraziť banditov', description: 'Zbaviť cestu od banditov.', xp: 75 }
    ];
  }







