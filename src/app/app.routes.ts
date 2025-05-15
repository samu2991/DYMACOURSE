import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { UserFormComponent } from './component/user-form.component';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: async () =>
      (await import('./component/about/about.component')).AboutComponent,
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./component/users/users.component').then((u) => u.UsersComponent),
    title: 'hello les Users',
    children: [
      {
        path: 'newUser',
        component: UserFormComponent,
        title: 'creer ton nouvelle utilisateur',
      },
    ],
  },
  {
    path: 'users/:id/:age',
    loadComponent: () =>
      import('./component/user/user.component').then((u) => u.UserComponent),
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
