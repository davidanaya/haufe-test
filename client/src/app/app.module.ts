import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { TodoDashboardModule } from './todo-dahsboard/todo-dashboard.module';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    TodoDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}