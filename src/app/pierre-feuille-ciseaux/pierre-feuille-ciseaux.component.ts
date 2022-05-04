import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pierre-feuille-ciseaux',
  templateUrl: './pierre-feuille-ciseaux.component.html',
  styleUrls: ['./pierre-feuille-ciseaux.component.css']
})
export class PierreFeuilleCiseauxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pick(pick: string): void
  {
    let bot_pick = '';
    let rand = Math.floor(Math.random() * 3)+1;
    switch (rand) {
      case 1:
        bot_pick='pierre';
        break;
      case 2:
        bot_pick='feuille';
        break;
      case 3:
        bot_pick='ciseaux';
        break;
      default:
        console.log('error :(');
    }

    let result = '';

    if(bot_pick === pick)
    {
      result = '<b>EGALITE</b>';
    }
    else if(bot_pick === 'pierre' && pick === 'feuille')
    {
      result = '<b>GAGNE</b>';
    }
    else if(bot_pick === 'feuille' && pick === 'ciseaux')
    {
      result = '<b>GAGNE</b>';
    }
    else if(bot_pick === 'ciseaux' && pick === 'pierre')
    {
      result = '<b>GAGNE</b>';
    }
    else
    {
      result = '<b>PERDU</b>';
    }
    const resultP = document.getElementById('result') as HTMLInputElement;
    if(resultP != null)
    {
      resultP.innerHTML = result+' Vous avez choisi '+pick+', l\'adversaire a choisi '+bot_pick;
    }
    
  }

}
