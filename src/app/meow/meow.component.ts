import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meow',
  templateUrl: './meow.component.html',
  styleUrls: ['./meow.component.css']
})
export class MeowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  meowmeow(number: number): void
  {
    
    const audios = document.getElementsByClassName('sound') as HTMLCollectionOf<HTMLAudioElement>

    for (let i = 0; i < audios.length; i++) {
      audios[i].pause();
      audios[i].currentTime = 0;
    }
    
    //Quitte les audios et retourne si égal à 0 (c'est à dire si on-mouseleave)
    if(number === 0)
    {
      return;
    }
    
    const audio = (<HTMLAudioElement>document.getElementById('meowmeow'+number+'-sound'));
  


    audio.pause();
    audio.currentTime = 0;

    if(audio != null)
    {
      audio.play();
    }
  }

}
