import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private language: 'en' | 'es' = 'es';
  private translations: Record<string, any> = {};
  public translationsLoaded = new BehaviorSubject<boolean>(false);

  constructor() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'en' || savedLang === 'es') {
      this.language = savedLang;
    }
    this.setLanguage(this.language);
  }

  private async loadTranslations() {
    try {
      const response = await fetch(`assets/i18n/${this.language}.json`);
      this.translations = await response.json();
      this.translationsLoaded.next(true);
    } catch (err) {
      console.error('Error loading translations:', err);
    }
  }

  public async setLanguage(lang: 'en' | 'es') {
    this.language = lang;
    localStorage.setItem('lang', lang);
    await this.loadTranslations();
  }

  public t(key: string): string {
    const result = key.split('.').reduce((acc, part) => acc?.[part], this.translations);
    return typeof result === 'string' ? result : key;
  }

  public getRaw(key: string): any {
    return key.split('.').reduce((acc, part) => acc?.[part], this.translations);
  }

  public get currentLang(): 'en' | 'es' {
    return this.language;
  }
}
