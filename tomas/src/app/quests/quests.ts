import { Component } from '@angular/core';
import { Doingquests } from '../doingquests';
import { QuestItem } from '../quest-item/quest-item';

@Component({
  selector: 'app-quests',
  imports: [QuestItem],
  templateUrl: './quests.html',
  styleUrl: './quests.css'
})
export class Quests {
  quests: Doingquests[] = [
    { id: 1, title: 'Zachráň dedinu', description: 'Poraz zlého draka a zachráň dedinu.', xp: 120 },
    { id: 2, title: 'Nájsť stratený meč', description: 'Nájsť legendárny meč v lese.', xp: 45 },
    { id: 3, title: 'Získať byliny', description: 'Zbierať liečivé byliny pre liečiteľa.', xp: 30 },
    { id: 4, title: 'Poraziť banditov', description: 'Zbaviť cestu od banditov.', xp: 75 }
  ];
  questFormVisible = false;
  showQuestForm() {
    this.questFormVisible = !this.questFormVisible;
  }
  deleteQuest(id: number) {
    this.quests = this.quests.filter((quest) => quest.id !== id);
}
}









