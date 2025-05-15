import { Component, computed, effect, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserFormComponent } from '../user-form.component';

@Component({
  selector: 'app-user',
  imports: [],
  template: `
    <p>id: {{ id() }}</p>
    <p>age: {{ age() }}</p>
  `,
  styles: ``,
})
export class UserComponent {
  id = input.required<string>();
  age = input.required<number>();

  activatedRoute = inject(ActivatedRoute);
  params = toSignal(this.activatedRoute.params);
  queryParams = toSignal(this.activatedRoute.queryParams);
  queryParamMap = toSignal(this.activatedRoute.queryParamMap);
  name = computed(() => this.queryParams()?.['name']);

  constructor() {
    effect(() => {
      console.log({
        queryParams: this.queryParams(),
        queryParamMap: this.queryParamMap(),
        params: this.params(),
        name: this.queryParamMap()?.get('name'),
        name2: this.name(),
      });
    });
  }
}
