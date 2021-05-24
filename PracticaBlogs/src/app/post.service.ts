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
        titulo: 'Fantasía (1940)',
        texto: 'Película de 1940 creada por los estudios de Disney. Esta película es un clásico porque combina la animación con la música clásica, en un periodo en el que experimentar con largometrajes de animación tradicional se reducía a grandes estudios. Se presenta en ocho partes divididas por una orquesta (en live action) y en cada parte se escucha alguna pieza musical de grandes como Beethoven o Tchaïkovski. La película se puede disfrutar como un musical abstracto y dulce. Aunque se le aplicó hace años cierta censura por contenido racista y desnudos; esta última censura ya no se mantiene, al menos en Disney+.',
        autor: 'David Garrosa',
        imagen: 'https://historiadelcine.es/wp-content/uploads/2021/04/fantansia-pelicula-animacion.jpg',
        fecha: '20/05/2005',
        categoria: 'animacion'
      },
      {
        titulo: 'Spider-Man: un nuevo universo (Spider-Man: Into the Spiderverse) (2018)',
        texto: 'Dirigida por Bob Persichetti, Peter Ramsey y Rodney Rothman en 2018. Gustó mucho a la crítica porque mostraba sin recelos su principal inspiración visual que es el cómic, y lo hizo bien. Específicamente tiene cuatro fuentes: The Amazing Spider-Man de 1962 (el mundo original), el videojuego Spider-Man: Shattered Dimensions de 2010, la serie de cómics Ultimate Comics: Fallout 2012 y el evento Spiderverse de 2014. Nos muestra la vida de Miles Morales, un joven cuyo destino es el de convertirse en Spider-Man. Con un Óscar a Mejor Película de Animación en 2019, para todo público y muy divertida.',
        autor: 'David Garrosa',
        imagen: 'https://i.blogs.es/cc9c32/spiderman-into-the-spider-verse-miles-morales-spider-gwen-spider-ham-peter-parker-spider-noir-peni-parker-y5112/450_1000.jpg',
        fecha: '4/05/2017',
        categoria: 'animacion'
      },
      {
        titulo: 'Grease (1978)',
        texto: 'Probablemente el primer musical que les venga a la cabeza a muchos de nuestros lectores. Este musical dirigido por Randal Kleiser, fue todo un hito a finales de los setenta, catapultando la carrera de John Travolta y Olivia Newton-John. Desde una trama narrativa sencilla, nos adentramos en el idilio romántico entre una chica australiana llamada Sandy, que acaba de llegar a su nuevo instituto en Estados Unidos. Ahí se vuelve a encontrar con su amor veraniego Danny, con el que había pasado el último verano en Australia. Grease (1978) cuenta con una banda sonora que es cultura popular de toda una generación que creció cantando las pegadizas canciones que componen este musical. Aún a día de hoy, se siguen haciendo musicales por todo el mundo homenajeando a la película y emulando la estética canalla del film. Un musical tremendamente divertido, que te tendrá bailando y cantando durante todo su metraje.',
        autor: 'David Garrosa',
        imagen: 'https://historiadelcine.es/wp-content/uploads/2021/01/grease-mejor-musical.jpg',
        fecha: '4/05/2017',
        categoria: 'musical'
      },
      {
        titulo: 'Los miserables (2012)',
        texto: 'La obra maestra de Victor Hugo, ha tenido numerosas adaptaciones cinematográficas; sin embargo, nos quedamos con la más actual. Una adaptación realmente formidable en su producción y en su desarrollo musical. Las interpretaciones corales que llegamos a ver, son excepcionales; destacando la de Hugh Jackman como Jean Valjean. Una historia universal que nos habla de las segundas oportunidades y cómo a través del perdón, podemos cambiar el mundo para bien. cuanto a los números musicales, bajo el punto de vista de este servidor, Los miserables (2012) cuenta con algunos de los mejores que se han llegado hacer en la historia de los musicales, aunque sea mérito del musical de Broadway. Una película que está compuesta por elementos como la esperanza, el perdón, la empatía y la libertad del individuo, dentro de un mundo cruel e injusto. Uno de los mejores musicales de la historia, que llenará tu corazón lleno de alegría y esperanza; visionado obligado, para los que no la hayan visto aún.',
        autor: 'David Garrosa',
        imagen: 'https://fashion.hola.com/imagenes/tendencias/2015080662108/holacineymoda-streetstyle-los-miserables/0-234-881/ficha_los_miserables_2-z.jpg',
        fecha: '4/05/2020',
        categoria: 'musical'
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

