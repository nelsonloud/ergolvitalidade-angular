import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  heroWordsArray: string[] = ['saudável', 'produtivo', 'inspirador'];
  heroColorsArray: string[] = ['red', 'green', 'blue'];
  heroWord = '';
  heroWordColor = '';
  currentIndex = 0;

  constructor() {
    this.updateHeroWord();
  }

  updateHeroWord() {
    setInterval(() => {
      this.heroWord = this.heroWordsArray[this.currentIndex];
      this.heroWordColor = this.heroColorsArray[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.heroWordsArray.length;
    }, 1000);
  }
}
