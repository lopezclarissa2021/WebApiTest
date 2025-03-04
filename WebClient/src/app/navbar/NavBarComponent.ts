import { Component } from '@angular/core';

interface PostLink {
  id: number;
  component: Component | undefined;
  displayName: string;
}
@Component({
    selector: 'app-NavBar',
    standalone: false,
    templateUrl: './NavBar.component.html',
    styleUrl: './NavBar.component.css'
})
export class NavBarComponent {
    staticPosts: PostLink[] = [
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
