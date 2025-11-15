import { Component, signal } from '@angular/core';
import { UserInputSection } from './components/user-input-section/user-input-section';
import { HeaderComponent } from './components/header-component/header-component';
import { ResultSection } from './components/result-section/result-section';
@Component({
  selector: 'app-root',
  imports: [UserInputSection, HeaderComponent, ResultSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('paperQuest-fe');
}
