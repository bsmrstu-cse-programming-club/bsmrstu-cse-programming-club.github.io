import { Component, ViewChild } from '@angular/core';
import { SyllabusService } from '../../services/syllabus.service';
import { MatAccordion } from '@angular/material/expansion';

@Component({
    selector: 'app-basic',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss'],
})
export class BasicComponent {
    @ViewChild(MatAccordion) accordion!: MatAccordion;
    complexityResources: any = [];
    complexityProblems: any = [];
    stlResources: any = [];
    constructor(private syllabusService: SyllabusService) {
        this.complexityResources = syllabusService.complexityResources;
        this.complexityProblems = syllabusService.complexityProblems;
        this.stlResources = syllabusService.stlResources;
    }
}
