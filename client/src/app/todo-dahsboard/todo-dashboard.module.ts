import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// containers
import { TodoDashboardComponent } from './containers/todo-dashboard/todo-dashboard.component';

// components
import { TodoViewerComponent } from './components/todo-viewer/todo-viewer.component';

// service
import { TodoDashboardService } from './todo-dashboard.service';

const routes: Routes = [
  {
    path: 'todos',
    children: [
     { path: '', component: TodoDashboardComponent },
     { path: ':id', component: TodoDashboardComponent }
    ]
  }
];

@NgModule({
  declarations: [
    TodoDashboardComponent,
    TodoViewerComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    TodoDashboardService
  ]
})
export class TodoDashboardModule {}