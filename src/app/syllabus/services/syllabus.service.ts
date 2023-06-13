import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SyllabusService {
    complexityResources = [
        {
            title: 'Time complexity of a computer program',
            url: 'https://youtu.be/V42FBiohc6c?list=PL2_aWCzGMAwI9HK8YPVBjElbLbI3ufctn',
            type: 'video',
            site: 'youtube',
        },
        {
            title: 'Big-O notation in 5 minutes',
            url: 'https://youtu.be/__vX2sjlpXU',
            type: 'video',
            site: 'youtube',
        },
        {
            title: 'Definition Of Big O Notation - Intro to Theoretical Computer Science',
            url: 'https://youtu.be/i1F_Uu0bYCc',
            type: 'video',
            site: 'youtube',
        },
        {
            title: 'Algorithms Lecture 1 -- Introduction to asymptotic notations',
            url: 'https://www.youtube.com/watch?v=aGjL7YXI31Q',
            type: 'video',
            site: 'youtube',
        },
        {
            title: 'Efficiency',
            url: 'https://www.iarcs.org.in/inoi/online-study-material/topics/efficiency.php',
            type: 'video',
            site: 'Indian Computing Olympiad',
        },
        {
            title: `A beginner's guide to Big O Notation`,
            url: 'https://robbell.io/2009/06/a-beginners-guide-to-big-o-notation',
            type: 'article',
            site: 'Rob Bell',
        },
        {
            title: `Big O Notation`,
            url: 'https://www.youtube.com/watch?v=v4cd1O4zkGw',
            type: 'video',
            site: 'youtube',
        },
        {
            title: 'Time and space complexity analysis of recursive programs - using factorial',
            url: 'Time and space complexity analysis of recursive programs - using factorial',
            type: 'video',
            site: 'youtube',
        },
    ];
    complexityProblems = [
        {
            title: 'Multiple Choice Questions Related About Time and Space Complexity Of A Program',
            url: 'https://discuss.codechef.com/t/multiple-choice-questions-related-about-time-and-space-complexity-of-a-program/17976/1',
            type: 'mcq',
            site: 'codechef',
        },
    ];
    stlResources = [
        {
            title: 'vector',
            url: 'https://www.geeksforgeeks.org/vector-in-cpp-stl/',
        },
        {
            title: 'stack',
            url: 'https://www.geeksforgeeks.org/stack-in-cpp-stl/',
        },
        {
            title: 'queue',
            url: 'https://www.geeksforgeeks.org/queue-cpp-stl/',
        },
        {
            title: 'pair',
            url: 'https://www.geeksforgeeks.org/pair-in-cpp-stl/',
        },
        {
            title: 'priority_queue',
            url: 'https://www.geeksforgeeks.org/priority-queue-in-cpp-stl/',
        },
        {
            title: 'set',
            url: 'https://www.geeksforgeeks.org/set-in-cpp-stl/',
        },
        {
            title: 'unordered_set',
            url: 'https://www.geeksforgeeks.org/unordered_set-in-cpp-stl/',
        },
        {
            title: 'multiset',
            url: 'https://www.geeksforgeeks.org/multiset-in-cpp-stl/',
        },
        {
            title: 'map',
            url: 'https://www.geeksforgeeks.org/map-associative-containers-the-c-standard-template-library-stl/',
        },
        {
            title: 'unordered_map',
            url: 'https://www.geeksforgeeks.org/unordered_map-in-cpp-stl/',
        },
        {
            title: 'multimap',
            url: 'https://www.geeksforgeeks.org/multimap-associative-containers-the-c-standard-template-library-stl/',
        },
        {
            title: 'stringstream',
            url: 'https://www.geeksforgeeks.org/stringstream-c-applications/',
        },
        {
            title: 'additional STL list',
            url: 'https://www.geeksforgeeks.org/the-c-standard-template-library-stl/',
        },
    ];
    constructor() {}
}
