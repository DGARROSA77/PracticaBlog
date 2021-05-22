import { Component, OnInit } from '@angular/core';
import { Post } from '../post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  posts: Post[]

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
  }

  onChange($event) {
    if ($event.target.value === 'todos') {
      this.posts = this.postService.getAllPosts();
    } else {
      this.posts = this.postService.getPostsByCategoria($event.target.value)
    }
  }

}
