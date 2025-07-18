import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { LanguageService } from 'src/app/service/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  standalone: true,
  imports: [CommonModule, CarouselComponent, NgFor],
})
export class ModalComponent {
  @Input() show = false;
  @Input() project: any;
  @Output() close = new EventEmitter<void>();
  private langSub!: Subscription;

  constructor(
    public langService: LanguageService,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    await this.langService.setLanguage(this.langService.currentLang);
    this.langSub = this.langService.translationsLoaded.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  closeModal() {
    this.close.emit();
  }

  t(key: string): string {
    return this.langService.t(key);
  }
}
