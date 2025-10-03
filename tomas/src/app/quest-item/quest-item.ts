import { Component, input,computed,output } from '@angular/core';
import { Doingquests } from '../doingquests';


@Component({
  selector: 'app-quest-item',
  imports: [],
  templateUrl: './quest-item.html',
  styleUrl: './quest-item.css'
})
export class QuestItem {
  questData = input.required<Doingquests>()
  quest = computed(() => this.questData())

  delete = output<number>()
}

