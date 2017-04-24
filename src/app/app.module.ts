import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import {SharedColorService} from './sharedColor.service';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'skills', component: SkillsComponent },
  {  path: 'education', component: EducationComponent,},
  // { path: 'skills',component: HeroDetailComponent },
  // { path: 'skills',component: HeroDetailComponent },
  { path: '**', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EducationComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SharedColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
