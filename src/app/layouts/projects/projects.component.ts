import { Component } from '@angular/core';
import { FadeDirective } from "../../directives/fade.directive";
import { PROJECTS, Project } from '../../constants/projects';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';
import { LanguageService } from 'src/app/service/language.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, FadeDirective, ModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: any[] = [];
  visibleCount = 6;
  selectedProject: Project | null = null;
  modalVisible = false;
  private langSub!: Subscription;

  constructor(public langService: LanguageService) {}
  ngOnInit(): void {
    this.langSub = this.langService.translationsLoaded.subscribe(() => {
      this.projects = this.langService.getRaw('projects.list') || [];
    });
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  get limitedProjects(): any[] {
    return this.projects.slice(0, this.visibleCount);
  }

  showMore() {
    this.visibleCount = this.projects.length;
  }

  openModal(project: any) {
    this.selectedProject = project;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.selectedProject = null;
  }

  t(key: string): string {
    return this.langService.t(key);
  }
}
