import { Component, OnInit } from '@angular/core';

import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  constructor(private CharacterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.CharacterService.getCharacters()
    .subscribe(characters => this.characters = characters);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.CharacterService.addCharacter({ name } as Character)
      .subscribe(c => {
        this.characters.push(c);
      });
  }

  delete(character: Character): void {
    this.characters = this.characters.filter(h => h !== character);
    this.CharacterService.deleteCharacter(character.id).subscribe();
  }

}
