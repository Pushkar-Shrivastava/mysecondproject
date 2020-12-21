import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';
import { SecondpageComponent } from './pages/secondpage/secondpage.component';
import { ThirdpageComponent } from './pages/thirdpage/thirdpage.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  {
    path: 'first',
    component: FirstpageComponent,
  },
  {
    path: 'second',
    component: SecondpageComponent,
  },
  {
    path: 'third',
    component: ThirdpageComponent,
  },
  {
    path: 'not-found',
    component: NotfoundpageComponent,
    data: { message: 'Page not found!' },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
