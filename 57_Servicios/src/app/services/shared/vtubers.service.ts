import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VtubersService {
  private vtubers: vtubers[] = [
    {
      nombre: "Fuwawa Abyssgard",
      perfil: "La hermana gemela mayor y esponjosa de Los Perros Guardianes Demoníacos, quienes fueron sellados en La Celda por ser un dolor en el trasero divino, Fuwawa Abyssgard es \"La Esponjosa\". Su deber es cuidar calmadamente a su hermana gemela menor Mococo y a su mascota Pero, pero esa calma puede ser de corta duración. En última instancia, ella es una chica animada y bulliciosa a quien le encanta charlar y jugar.",
      img: "assets/img/Fuwawa_Abyssgard.webp",
      generacion: "3rd gen",
      debut: "2023/07/31"
    },
    {
      nombre: "Mococo Abyssgard",
      perfil: "La hermana menor y peluda de Los Perros Guardianes Demoníacos, quienes fueron sellados en La Celda por ser un dolor en el trasero divino, Mococo Abyssgard es \"La Peluda\". La alborotadora Mococo pasó todo su tiempo encarcelada viendo anime y jugando juegos, a menudo involucrando a su hermana gemela mayor Fuwawa y su mascota Pero en más travesuras caóticas. Se rumorea que participó en la fuga de la prisión solo por diversión.",
      img: "assets/img/Mococo_Abyssgard.webp",
      generacion: "3rd gen",
      debut: "2023/07/31"
    },
    {
      nombre: "Mori Calliope",
      perfil: "La primera aprendiz de la Parca. Debido a que la atención médica moderna ha causado un declive en el negocio de la cosecha, Calliope decidió convertirse en una VTuber para cosechar almas en su lugar. Parece que las almas ascendidas de las personas que son vaporizadas por las interacciones saludables entre VTubers también van hacia ella. Dicho esto, a pesar de la imagen que sus vocales intensas y su forma de hablar puedan dar, en realidad es una chica de corazón gentil que se preocupa mucho por sus amigos.",
      img: "assets/img/Mori_Calliope.webp",
      generacion: "1st gen",
      debut: "2020/09/12"
    },
    {
      nombre: "Takanashi Kiara",
      perfil: "Una ídolo cuyo sueño es convertirse en la dueña de una cadena de comida rápida. Kiara es un fénix, no un pollo o un pavo. (Muy importante) Ella brilla intensamente, trabajando hasta el cansancio ya que simplemente renacerá de sus cenizas de todos modos.",
      img: "assets/img/Takanashi_Kiara.webp",
      generacion: "1st gen",
      debut: "2020/09/12"
    },
    {
      nombre: "Ninomae Ina'nis",
      perfil: "A pesar de su apariencia, Ina'nis es en realidad una sacerdotisa de los Antiguos. Un día, recogió un extraño libro y comenzó a ganar el poder de controlar tentáculos. Para ella, los tentáculos son solo una parte de su vida ordinaria; nunca ha sido un gran problema para ella. Sin embargo, su mente femenina quiere que se vistan y se mantengan bonitos. Después de ganar poder, comenzó a escuchar Susurros y Revelaciones Antiguas. Por lo tanto, comenzó sus actividades de VTuber para realizar controles de cordura aleatorios sobre la humanidad, como una chica ordinaria.",
      img: "assets/img/Ninomae_Ina.webp",
      generacion: "1st gen",
      debut: "2020/09/13"
    },
    {
      nombre: "Gawr Gura",
      perfil: "Una descendiente de la Ciudad Perdida de Atlantis, que nadó a la Tierra mientras decía: '¡Es tan aburrido allá abajo, jajaja!' Gura compró su ropa (y su sombrero de tiburón) en el mundo humano y realmente los ama. En su tiempo libre, disfruta hablando con la vida marina.",
      img: "assets/img/Gawr_Gura.webp",
      generacion: "1st gen",
      debut: "2020/09/13"
    },
    {
      nombre: "Watson Amelia",
      perfil: "Amelia escuchó extraños rumores en línea sobre hololive: zorros parlantes, ardillas mágicas, perros superhumanos y más. Poco después de comenzar su investigación sobre hololive, y solo por interés, ¡decidió convertirse ella misma en una ídolo! Le encanta pasar su tiempo entrenando sus reflejos con juegos de disparos en primera persona, y desafiándose a sí misma con juegos de rompecabezas. 'Es elemental, ¿verdad?'",
      img: "assets/img/Watson_Amelia.webp",
      generacion: "1st gen",
      debut: "2020/09/13"
    }
  ];
  constructor() { }

  getVtubers(): vtubers[] {
    return this.vtubers;
  }
}

export interface vtubers {
  nombre: String;
  perfil: String;
  img: String;
  generacion: String;
  debut: string;
}