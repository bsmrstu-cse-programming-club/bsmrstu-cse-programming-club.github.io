import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root-default',
  templateUrl: './root-default.component.html',
  styleUrls: ['./root-default.component.scss'],
})
export class RootDefaultComponent {
  navigations = [
    {
      title: 'Syllabus',
      url: '/syllabus',
      name: 'syllabus',
      isActive: true,
    },
    {
      title: 'Hosted Contests',
      url: '/contests',
      name: 'contests',
      isActive: false,
    },
    {
      title: 'Members',
      url: '/members',
      name: 'contests',
      isActive: false,
    },
    {
      title: 'Achievments',
      url: '/achievments',
      name: 'achievments',
      isActive: false,
    },
  ];
  constructor(private router: Router) {
    router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        const url = route.url.split('/');
        for (const navigation of this.navigations) {
          navigation.isActive = navigation.name === url[1];
        }
        const isUpdated = this.navigations.filter(
          (value) => value.isActive === true
        );
        if (!isUpdated?.length) this.navigations[0].isActive = true;
      }
    });
  }
}
