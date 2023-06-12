import { Component } from '@angular/core';

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
    },
    {
      title: 'Hosted Contests',
      url: '/contests',
    },
    {
      title: 'Members',
      url: '/members',
    },
    {
      title: 'Achievments',
      url: '/achievments',
    },
  ];
}
