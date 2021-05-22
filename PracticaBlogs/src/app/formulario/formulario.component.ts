import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() postCreado: EventEmitter<Post>

  nuevoPost: Post;


  constructor(private postService: PostService) {
    this.nuevoPost = {
      titulo: '',
      texto: '',
      autor: '',
      imagen: '',
      fecha: '',
      categoria: ''
    };

    this.postCreado = new EventEmitter();

  }

  ngOnInit(): void {
  }


  onClick() {

    this.postCreado.emit(this.nuevoPost);
    this.nuevoPost = {
      titulo: '',
      texto: '',
      autor: '',
      imagen: '',
      fecha: '',
      categoria: ''
    }

  }



}
