import { Component } from '@angular/core';

interface PageLink {
  slug: string;
  component: Component | undefined;
  displayName: string;
}
@Component({
    selector: 'app-nav-bar',
    standalone: false,
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
    staticPages: PageLink[] = [
        {
            slug: 'taco',
            component: undefined,
            displayName: 'Taco News'
        },
        {
            slug: 'toast',
            component: undefined,
            displayName: 'Toast News'
        },
        {
            slug: 'hello',
            component: undefined,
            displayName: 'Hello'
        },
        {
            slug: 'hello-world',
            component: undefined,
            displayName: 'Hello World'
        }
    ];
}
