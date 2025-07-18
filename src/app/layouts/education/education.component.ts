import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educationList: any[] = [];
  private langSub!: Subscription;

  constructor(public langService: LanguageService){}

  ngOnInit(): void {
    this.langSub = this.langService.translationsLoaded.subscribe(() => {
      this.educationList = this.langService.getRaw('education.list') || [];
    });
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  t(key:string):string {
    return this.langService.t(key);
  }
}
