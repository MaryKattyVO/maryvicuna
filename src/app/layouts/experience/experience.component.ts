import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experienceList: any[] = [];
  private langSub!: Subscription;

  constructor(public langService: LanguageService) {}

  ngOnInit(): void {
    this.langSub = this.langService.translationsLoaded.subscribe(() => {
      this.experienceList = this.langService.getRaw('experience.list') || [];
    });
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  t(key: string): string {
    return this.langService.t(key);
  }
}
