import { Component } from '@angular/core';

interface PageLink {
  id: number;
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
            id: 1,
            component: undefined,
            displayName: 'Taco News'
        },
        {
            id: 2,
            component: undefined,
            displayName: 'Toast News'
        },
        {
            id: 3,
            component: undefined,
            displayName: 'Hello'
        },
        {
            id: 4,
            component: undefined,
            displayName: 'Hello World'
        }
    ];
}
