import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Character } from './character';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const characters = [
      { id: 11, name: 'LolMaster' },
      { id: 12, name: 'LordBread' },
      { id: 13, name: 'Thanos' },
      { id: 14, name: 'Mage222' },
      { id: 15, name: 'RubberMa' },
      { id: 16, name: 'Dynama2' },
      { id: 17, name: 'Dr. Doom' },
      { id: 18, name: 'Magma' },
      { id: 19, name: 'TornadoX' }
    ];
    return {characters: characters};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(characters: Character[]): number {
    return characters.length > 0 ? Math.max(...characters.map(character => character.id)) + 1 : 11;
  }
}