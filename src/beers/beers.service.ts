import { Injectable } from '@nestjs/common';
import { CreateBeerDto } from './dto/create-beer.dto/create-beer.dto';

@Injectable()
export class BeersService {
    
  private beers = [
    {"id": 1,
      "name": "ipa mutante",
      "style": "india pale ale",
      "stock": 500
    }
  ];

    findAll(){
      return this.beers;
    }


findOne(id:any){
      return this.beers.find(function(beer){
        return beer.id == id;
      });
    }

    create(createBeerDto:CreateBeerDto){
      let nextId = this.beers[this.beers.length-1].id +1;
      let beer = {
        "id": nextId,
      ...createBeerDto
    };
      this.beers.push(beer);
      return beer;
    }


}
