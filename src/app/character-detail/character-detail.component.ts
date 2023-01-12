import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: [ './character-detail.component.css' ]
})
export class CharacterDetailComponent implements OnInit {
  character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.characterService.getCharacter(id)
      .subscribe(character => this.character = character);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.character) {
      this.characterService.updateCharacter(this.character)
        .subscribe(() => this.goBack());
    }
  }
}
