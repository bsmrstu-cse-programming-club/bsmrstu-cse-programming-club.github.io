import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent {
  navigations = [
    {
      title: 'Basic',
      url: '',
      isActive: false,
    },
    {
      title: 'Moderate',
      url: '/syllabus/moderate',
      isActive: false,
    },
    {
      title: 'Advance',
      url: '/syllabus/advance',
      isActive: false,
    },
    {
      title: 'Additional Resources',
      url: '/syllabus/resources',
      isActive: false,
    },
  ];
}
