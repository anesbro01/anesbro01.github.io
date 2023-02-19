import { Component } from '@angular/core';
import { SoundItem } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  items: SoundItem[] = [
    {
      label: 'cekaj budaletino',
      src: 'assets/cekaj_budaletino.mp3',
      isPlaying: false
    },
    {
      label: 'dodji vamo',
      src: 'assets/dodji_vamo.mp3',
      isPlaying: false
    },
    {
      label: 'igraj!!!',
      src: 'assets/igraj.mp3',
      isPlaying: false
    },
    {
      label: 'imbessssil',
      src: 'assets/imbesil.mp3',
      isPlaying: false
    },
    {
      label: 'jos jedanput',
      src: 'assets/jos_jedanput.mp3',
      isPlaying: false
    },
    {
      label: 'ko da si slon',
      src: 'assets/ko_da_si_slon.mp3',
      isPlaying: false
    },
    {
      label: 'ko si ti???',
      src: 'assets/ko_si_ti.mp3',
      isPlaying: false
    },
    {
      label: 'lomit kicmu',
      src: 'assets/lomit_kicmu.mp3',
      isPlaying: false
    },
    {
      label: 'mile kate',
      src: 'assets/mile_kate.mp3',
      isPlaying: false
    },
    {
      label: 'ne mozes posmatrat',
      src: 'assets/ne_mozes_posmatrat.mp3',
      isPlaying: false
    },
    {
      label: 'postani intiman',
      src: 'assets/postani_intiman.mp3',
      isPlaying: false
    },
    {
      label: 'samo podbodi',
      src: 'assets/samo_podbodi.mp3',
      isPlaying: false
    },
    {
      label: 'spanjolski',
      src: 'assets/spanjolski.mp3',
      isPlaying: false
    },
    {
      label: 'sta gazis',
      src: 'assets/sta_gazis.mp3',
      isPlaying: false
    },
    {
      label: 'ti stojis',
      src: 'assets/ti_stojis.mp3',
      isPlaying: false
    },
  ];
}
