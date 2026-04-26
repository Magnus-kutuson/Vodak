import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Stats } from './stats/stats';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Stats, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Vodak-portfolio');
}
