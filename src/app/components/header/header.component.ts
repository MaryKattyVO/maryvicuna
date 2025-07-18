import {
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NavItem, navItems } from '../../constants/header-nav';
import { HEADER_DEPS } from './header.dependencies';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [HEADER_DEPS],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public navItems: NavItem[] = navItems;
  public sidenavState: 'in' | 'out' = 'out';
  public activeSection: string = '';
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

  public openSidenav() {
    this.sidenavState = 'in';
  }

  public closeSidenav() {
    this.sidenavState = 'out';
  }

 ngAfterViewInit(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        const sectionId = visible[0].target.id;
        if (this.activeSection !== sectionId) {
          this.activeSection = sectionId;
          this.cdr.detectChanges();
        }
      }
    },
    {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      rootMargin: '-30% 0px -30% 0px',
    }
  );

  this.navItems.forEach(item => {
    const el = document.getElementById(item.link);
    if (el) observer.observe(el);
  });
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

  scrollToSection(id: string) {
  const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
