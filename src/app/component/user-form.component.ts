import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <div class="form-container">
      <form [formGroup]="userForm" (submit)="submit()" class="user-form">
        <h2>Informations Utilisateur</h2>
        
        <div class="form-group">
          <label for="firstName">Nom</label>
          <input formControlName="firstName" type="text" id="firstname" placeholder="Entrez votre nom" />
        </div>
        
        <div class="form-group">
          <label for="lastName">Prénom</label>
          <input formControlName="lastName" type="text" id="lastName" placeholder="Entrez votre prénom" />
        </div>
        
        <div class="form-group">
          <label for="mail">Email</label>
          <input formControlName="mail" type="email" id="mail" placeholder="exemple@email.com" />
        </div>
        
        <div class="form-group">
          <label for="age">Age</label>
          <input formControlName="age" type="number" id="age" placeholder="Votre âge" />
        </div>
        
        <button type="submit" class="submit-btn">Envoyer</button>
      </form>
      
      <div class="form-preview">
        <h3>Aperçu des données</h3>
        <pre>{{ userForm.value | json }}</pre>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        padding: 2rem;
      }

      .form-container {
        display: flex;
        gap: 3rem;
        background: white;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        padding: 2rem;
      }

      .user-form {
        flex: 1;
      }

      h2 {
        color: #2c3e50;
        margin-bottom: 2rem;
        font-size: 1.8rem;
      }

      .form-group {
        margin-bottom: 1.5rem;
      }

      label {
        display: block;
        margin-bottom: 0.5rem;
        color: #34495e;
        font-weight: 500;
      }

      input {
        width: 100%;
        padding: 0.8rem;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.3s, box-shadow 0.3s;
      }

      input:focus {
        outline: none;
        border-color: #3498db;
        box-shadow: 0 0 0 3px rgba(52,152,219,0.1);
      }

      input::placeholder {
        color: #bdc3c7;
      }

      .submit-btn {
        width: 100%;
        padding: 1rem;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.2s;
      }

      .submit-btn:hover {
        background: #2980b9;
        transform: translateY(-2px);
      }

      .form-preview {
        flex: 1;
        padding: 2rem;
        background: #f8f9fa;
        border-radius: 10px;
      }

      .form-preview h3 {
        color: #2c3e50;
        margin-bottom: 1rem;
      }

      pre {
        background: #fff;
        padding: 1rem;
        border-radius: 8px;
        font-family: monospace;
        color: #2c3e50;
        white-space: pre-wrap;
      }
    `,
  ],
})
export class UserFormComponent {
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mail: new FormControl(''),
    age: new FormControl(''),
  });

  submit() {
    console.log(this.userForm.value);
  }
}
