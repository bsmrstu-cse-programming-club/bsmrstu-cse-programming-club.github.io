import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  navigations = [
    {
      title: 'Basic',
      url: '',
      name: 'basic',
      isActive: true,
    },
    {
      title: 'Moderate',
      url: '/syllabus/moderate',
      name: 'moderate',
      isActive: false,
    },
    {
      title: 'Advance',
      url: '/syllabus/advance',
      name: 'advance',
      isActive: false,
    },
    {
      title: 'Additional Resources',
      url: '/syllabus/resources',
      name: 'resources',
      isActive: false,
    },
  ];

  constructor(private router: Router) {
    router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        const url = route.url.split('/');
        for (const navigation of this.navigations) {
          navigation.isActive = navigation.name === url[url.length - 1];
        }
        const isUpdated = this.navigations.filter(
          (value) => value.isActive === true
        );
        if (!isUpdated?.length) this.navigations[0].isActive = true;
      }
    });
  }
}
