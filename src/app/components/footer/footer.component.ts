import { Component } from '@angular/core';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor(public langService: LanguageService) {}

  t(key: string): string {
    return this.langService.t(key);
  }
}
