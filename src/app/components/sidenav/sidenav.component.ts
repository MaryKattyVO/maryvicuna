import { Component, Input, Output, EventEmitter,OnDestroy, OnInit, ChangeDetectorRef, HostListener} from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0%)' })),
      state('out', style({ transform: 'translateX(100%)' })),
      transition('in <=> out', animate('300ms ease-in-out')),
    ])
  ]
})
export class SidenavComponent implements OnInit, OnDestroy {
  @Input() isOpen: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  public activeSection: string = '';

  @HostListener('window:resize', [])
  onResize() {
    const isDesktop = window.innerWidth >= 1024;
    if (isDesktop && this.isOpen) {
      this.close();
    }
  }
  private subscription!: Subscription;
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
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.langSub?.unsubscribe();
  }
  get animationState() {
    return this.isOpen ? 'in' : 'out';
  }

  close() {
    this.onClose.emit();
  }

  async switchLang(lang: 'en' | 'es') {
    await this.langService.setLanguage(lang);
  }

  t(key: string): string {
    return this.langService.t(key);
  }

  toggleLang(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.switchLang(checked ? 'en' : 'es');
  }
}
