import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [LayoutComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent]
})
export class UiModule { }
