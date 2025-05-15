import { Component } from '@angular/core';
// import { DymaComponent } from './dyma/dyma.component';
import { UsersComponent } from './component/users/users.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-container">
      <header class="header">
        <nav class="nav-container">
          <div class="logo">DYMA</div>
          <div class="nav-links">
            <a
              class="nav-link"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              routerLink="/"
            >Accueil</a>
            <a
              class="nav-link"
              routerLinkActive="active"
              routerLink="/users"
            >Utilisateurs</a>
            <a
              class="nav-link"
              routerLinkActive="active"
              routerLink="/about"
            >À propos</a>
          </div>
        </nav>
      </header>

      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: #f5f6fa;
    }

    .header {
      background: white;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: #3498db;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      text-decoration: none;
      color: #2c3e50;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      transition: all 0.3s ease;
    }

    .nav-link:hover {
      color: #3498db;
      background-color: rgba(52,152,219,0.1);
    }

    .nav-link.active {
      color: #3498db;
      background-color: rgba(52,152,219,0.1);
    }

    .main-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    @media (max-width: 768px) {
      .nav-container {
        padding: 1rem;
      }

      .nav-links {
        gap: 1rem;
      }

      .nav-link {
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
      }
    }
  `]
})
export class AppComponent {
  // private title = 'DYMACOURSE';
  // isLogedIn = false;
  // user = {
  //   name: 'John Doe',
  //   email: 'samuallouche@gmail',
  // };
  // age = 25;
  // status = 'single';
  // test: string | undefined;
  // squareTitle = '';
  // displayTitle() {
  //   return this.title;
  // }
  // sayHi() {
  //   return (this.squareTitle = 'Hi');
  // }
  // sayBye() {
  //   return (this.squareTitle = '');
  // }
  // consoleEvent(mousseEvent: MouseEvent) {
  //   console.log(mousseEvent);
  // }
}
