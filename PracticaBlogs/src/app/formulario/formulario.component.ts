import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {



  public formGroup: FormGroup;


  constructor(private postService: PostService, private router: Router) {


  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      titulo: new FormControl(''),
      texto: new FormControl(''),
      autor: new FormControl(''),
      imagen: new FormControl(''),
      fecha: new FormControl(''),
      categoria: new FormControl('')
    })
  }



  submit(formValue: Post) {
    this.postService.addPost(formValue);
    this.postService.getAllPosts();
    this.router.navigate(['/blog']);
  }



}
