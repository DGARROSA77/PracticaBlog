import { Injectable } from '@angular/core';
import * as EventEmitter from 'events';
import { Post } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private arrPost: Post[]

  constructor() {
    this.arrPost = [
      {
        titulo: 'CASA',
        texto: 'Hola Mundo',
        autor: 'David Garrosa',
        imagen: 'http://planodecasa.com/wp-content/uploads/2016/10/Casa-de-2-pisos-parcialmente-revestida-en-piedra.jpg',
        fecha: '20/05/2005',
        categoria: 'privado'
      },
      {
        titulo: 'CASA',
        texto: 'Hola Mundo',
        autor: 'David Garrosa',
        imagen: 'http://planodecasa.com/wp-content/uploads/2016/10/Casa-de-2-pisos-parcialmente-revestida-en-piedra.jpg',
        fecha: '4/05/2017',
        categoria: 'publico'
      }

    ]
  }

  getAllPosts(): Post[] {
    return this.arrPost;
  }

  addPost(nuevoPost: Post) {
    this.arrPost.push(nuevoPost);

  }

  getPostsByCategoria(pCategoria: string): Post[] {
    return this.arrPost.filter((post) => {
      return post.categoria === pCategoria;
    })
  }


}

