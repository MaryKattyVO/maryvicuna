import { Component } from '@angular/core';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  constructor(public langService: LanguageService) {

  }
  t(key: string): string {
    return this.langService.t(key);
  }
}
