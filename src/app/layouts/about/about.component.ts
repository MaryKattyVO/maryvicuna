import { Component } from "@angular/core";
import { FadeDirective } from "../../directives/fade.directive";
import { LanguageService } from "src/app/service/language.service";

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  imports: [ FadeDirective ]
})
export class AboutComponent {
  constructor(public langService: LanguageService) {}

  t(key:string): string {
    return this.langService.t(key);
  }

  handleClick(event: MouseEvent) {
    const img = event.target as HTMLElement;
    if (img) {
      img.classList.add('clicked');
      setTimeout(() => img.classList.remove('clicked'), 600);
    }
  }

  get cvFile(): string {
    const lang = this.langService.currentLang;
    return lang === 'es'
      ? 'assets/cv/CV-ES-Mary-Vicuna.pdf'
      : 'assets/cv/CV-EN-Mary-Vicuna.pdf';
  }
}
