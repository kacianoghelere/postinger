import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: any = [
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      author: 'kaciano'
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      author: 'kaciano'
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      author: 'kaciano'
    }
  ]

  constructor() { }

  ngOnInit() {
  }
}
