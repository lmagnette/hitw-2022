import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joke } from '../../models/joke';
import { Clipboard } from '@capacitor/clipboard';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent implements OnInit {
  @Input()
  joke: Joke = {id:-1,author:'', text:'',like:0};

  @Output()
  like:EventEmitter<Joke> = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit(): void {
  }

  likeClicked(){
    this.like.emit(this.joke);
  }

  async copy() {
    await Clipboard.write( {
      string: this.joke.text
    } );
  }
}
