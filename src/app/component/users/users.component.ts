import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  template: `
    <div class="users-container">
      <h2 class="users-title">Liste des Utilisateurs</h2>
      <button routerLink="newUser">Create New user</button>
      <div class="users-grid">
        @for (user of usersList; track user.name) {
        <div
          class="user-card"
          [routerLink]="[user.id, user.age]"
          [queryParams]="{ name: user.name }"
        >
          <div class="user-avatar">{{ user.name[0].toUpperCase() }}</div>
          <div class="user-info">
            <h3>{{ user.name }}</h3>
            <p>Age: {{ user.age }} ans</p>
          </div>
        </div>
        }
      </div>
    </div>
  `,
  styles: `
    .users-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .users-title {
      color: #2c3e50;
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    .users-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .user-card {
      background: white;
      border-radius: 10px;
      padding: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .user-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .user-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #3498db;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .user-info {
      flex: 1;
    }

    .user-info h3 {
      margin: 0;
      color: #2c3e50;
      font-size: 1.2rem;
      text-transform: capitalize;
    }

    .user-info p {
      margin: 0.5rem 0 0;
      color: #7f8c8d;
      font-size: 0.9rem;
    }
  `,
})
export class UsersComponent {
  activatedRoute = inject(ActivatedRoute);

  title = toSignal(this.activatedRoute.title);

  usersList = [
    {
      name: 'samuel',
      age: 34,
      id: 3,
    },
    {
      name: 'shanu',
      age: 4,
      id: 2,
    },
    {
      name: 'toto',
      age: 3,
      id: 1,
    },
  ];

  constructor() {
    effect(() => {
      console.log(this.title());
    });
  }
}
