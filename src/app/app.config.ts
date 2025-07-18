import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, Route, provideRouter, withInMemoryScrolling  } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './layouts/about/about.component';
import { ContactsComponent } from './layouts/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './layouts/skills/skills.component';
import { EducationComponent } from './layouts/education/education.component';
import { ExperienceComponent } from './layouts/experience/experience.component';
import { ProjectsComponent } from './layouts/projects/projects.component';

export const APP_DEPS = [
  HeaderComponent,
  AboutComponent,
  ContactsComponent,
  FooterComponent,
  SkillsComponent,
  EducationComponent,
  ExperienceComponent,
  ProjectsComponent
];

const routes: Route[] = [];

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, inMemoryScrollingFeature), importProvidersFrom([BrowserModule, BrowserAnimationsModule])],
};
