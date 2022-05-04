import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-searchbybreed',
  templateUrl: './searchbybreed.component.html',
  styleUrls: ['./searchbybreed.component.css']
})
export class SearchbybreedComponent implements OnInit {

  private pizza : Array<any> | undefined;
  
  constructor(private http: HttpClient) { }

  /*Converti directement en nombre d'étoiles en lui passant un nombre*/
  convertToStars(points: string): string
  {
    if(parseInt(points) == 0)
    {
      return 'non';
    }
    return '⭐'.repeat(parseInt(points));
  }

  ngOnInit(): void {
    this.http.get<any>('https://api.thecatapi.com/v1/breeds'/*, request*/).subscribe(data => {
      console.log(data);


      let select: HTMLSelectElement = <HTMLSelectElement>document.getElementById('selectBreed');

      data.forEach((element:any) => {
        var option = document.createElement('option');
        option.text=element.name;
        option.value=element.id;

        if(select && typeof(select)!==null)
        {
          select.add(option,null);
        }
      });
    })
  }

  searchByBreed(): void {

    let select: HTMLSelectElement = <HTMLSelectElement>document.getElementById('selectBreed');
    
    this.http.get<any>('https://api.thecatapi.com/v1/images/search?breed_ids='+select.value+''/*, request*/).subscribe(data => {
      console.log(data[0]['breeds'][0]);
      console.log(data[0]);

      var img = document.createElement("img");  
      img.height=300;
      img.src=data[0].url;

      var imageWrapper = document.getElementById('imageWrapper');
      
      if(imageWrapper && typeof(imageWrapper)!==null)
      {
        imageWrapper.innerHTML='';
        imageWrapper.append(img);
      }

      //Set cat name
      const name = (<HTMLInputElement>document.getElementById('name'));
      if (name !== null) {
        name.innerHTML = data[0]['breeds'][0].name;
      }

      //Set cat adaptability
      const adaptability = (<HTMLInputElement>document.getElementById('adaptability'));
      if (adaptability !== null) {
        adaptability.innerHTML = '<b>Adaptabilité: </b>'+this.convertToStars(data[0]['breeds'][0].adaptability);
      }

      //Set cat affection_level
      const affection_level = (<HTMLInputElement>document.getElementById('affection_level'));
      if (affection_level !== null) {
        affection_level.innerHTML = '<b>Niveau d\'affection:</b> '+this.convertToStars(data[0]['breeds'][0].affection_level);
      }

      //Set cat child_friendly
      const child_friendly = (<HTMLInputElement>document.getElementById('child_friendly'));
      if (child_friendly !== null) {
        child_friendly.innerHTML = '<b>Adapté aux enfants: </b>'+this.convertToStars(data[0]['breeds'][0].child_friendly);
      }
      
      //Set cat dog_friendly
      const dog_friendly = (<HTMLInputElement>document.getElementById('dog_friendly'));
      if (dog_friendly !== null) {
        dog_friendly.innerHTML = '<b>Adapté aux chiens: </b>'+this.convertToStars(data[0]['breeds'][0].dog_friendly);
      }
      
      //Set cat energy_level
      const energy_level = (<HTMLInputElement>document.getElementById('energy_level'));
      if (energy_level !== null) {
        energy_level.innerHTML = '<b>Niveau d\'énergie: </b>'+this.convertToStars(data[0]['breeds'][0].energy_level);
      }

      //Set cat grooming
      const grooming = (<HTMLInputElement>document.getElementById('grooming'));
      if (grooming !== null) {
        grooming.innerHTML = '<b>Toilettage: </b>'+this.convertToStars(data[0]['breeds'][0].grooming);
      }

      //Set cat hairless
      const hairless = (<HTMLInputElement>document.getElementById('hairless'));
      if (hairless !== null) {
        hairless.innerHTML = '<b>Sans poils: </b>'+this.convertToStars(data[0]['breeds'][0].hairless);
      }      
      
      //Set cat health_issues
      const health_issues = (<HTMLInputElement>document.getElementById('health_issues'));
      if (health_issues !== null) {
        health_issues.innerHTML = '<b>Problèmes de santé: </b>'+this.convertToStars(data[0]['breeds'][0].health_issues);
      }
            
      //Set cat hypoallergenic
      const hypoallergenic = (<HTMLInputElement>document.getElementById('hypoallergenic'));
      if (hypoallergenic !== null) {
        hypoallergenic.innerHTML = '<b>Hypoallergénique: </b>'+this.convertToStars(data[0]['breeds'][0].hypoallergenic);
      }

      //Set cat indoor
      const indoor = (<HTMLInputElement>document.getElementById('indoor'));
      if (indoor !== null) {
        indoor.innerHTML = '<b>Adapté en intérieur: </b>'+this.convertToStars(data[0]['breeds'][0].indoor);
      }

      //Set cat intelligence
      const intelligence = (<HTMLInputElement>document.getElementById('intelligence'));
      if (intelligence !== null) {
        intelligence.innerHTML = '<b>Intelligence: </b>'+this.convertToStars(data[0]['breeds'][0].intelligence);
      }

      //Set cat rare
      const rare = (<HTMLInputElement>document.getElementById('rare'));
      if (rare !== null) {
        rare.innerHTML = '<b>Rare: </b>'+this.convertToStars(data[0]['breeds'][0].rare);
      }

      //Set cat shedding_level
      const shedding_level = (<HTMLInputElement>document.getElementById('shedding_level'));
      if (shedding_level !== null) {
        shedding_level.innerHTML = '<b>Perte de poils: </b>'+this.convertToStars(data[0]['breeds'][0].shedding_level);
      }

      //Set cat short_legs
      const short_legs = (<HTMLInputElement>document.getElementById('short_legs'));
      if (short_legs !== null) {
        short_legs.innerHTML = '<b>Petites jambes: </b>'+this.convertToStars(data[0]['breeds'][0].short_legs);
      }

      //Set cat social_needs
      const social_needs = (<HTMLInputElement>document.getElementById('social_needs'));
      if (social_needs !== null) {
        social_needs.innerHTML = '<b>Besoins sociaux: </b>'+this.convertToStars(data[0]['breeds'][0].social_needs);
      }
  
      //Set cat stranger_friendly
      const stranger_friendly = (<HTMLInputElement>document.getElementById('stranger_friendly'));
      if (stranger_friendly !== null) {
        stranger_friendly.innerHTML = '<b>Amical avec les étrangers: </b>'+this.convertToStars(data[0]['breeds'][0].stranger_friendly);
      }

      //Set cat vocalisation
      const vocalisation = (<HTMLInputElement>document.getElementById('vocalisation'));
      if (vocalisation !== null) {
        vocalisation.innerHTML = '<b>Voix: </b>'+this.convertToStars(data[0]['breeds'][0].vocalisation);
      }

            
      //Set cat temperamenty
      const temperamenty = (<HTMLInputElement>document.getElementById('temperamenty'));
      if (temperamenty !== null) {
        temperamenty.innerHTML = '<b>Tempérament: </b>'+this.convertToStars(data[0]['breeds'][0].temperamenty);
      }

      //Set cat weight
      const weight = (<HTMLInputElement>document.getElementById('weight'));
      if (weight !== null) {
        weight.innerHTML = '<b>Poids: </b>'+data[0]['breeds'][0].weight['metric']+' kg';
      }

      //Set cat wikipedia_url
      const wikipedia_url = (<HTMLAnchorElement>document.getElementById('wikipedia_url'));
      if (wikipedia_url !== null) {
        wikipedia_url.href = data[0]['breeds'][0].wikipedia_url;
        wikipedia_url.innerHTML='Lien wikipédia';
      }

      //Set cat life_span
      const life_span = (<HTMLInputElement>document.getElementById('life_span'));
      if (life_span !== null) {
        life_span.innerHTML='<b>Durée de vie: </b>' + data[0]['breeds'][0].life_span+' ans';
      }

      //Set cat origin
      const origin = (<HTMLInputElement>document.getElementById('origin'));
      if (origin !== null) {
        origin.innerHTML='<b>Origine: </b>'+data[0]['breeds'][0].origin;
      }

      //Set cat description
      const description = (<HTMLInputElement>document.getElementById('description'));
      if (description !== null) {
        description.innerHTML='<b>Description: </b><br/>'+data[0]['breeds'][0].description;
      }
      
    })
  }

}
