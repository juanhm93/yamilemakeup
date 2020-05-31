import React from 'react';
import Header from '../components/Header';
import Frontcover from '../components/Frontcover';
import Biography from '../components/Biography';
import Course from '../components/Course';
import Store from '../components/Store';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      indice: 1,
      data: [
        {
          id: 1,
          name: 'Automaquillaje Express',
          imgCourse: '/images/automaquillaje-express.jpg',
        },
        {
          id: 2,
          name: 'Automaquillaje y Estilismo',
          imgCourse: 'images/automaquillaje-y-estilismo.jpg',
        },
        {
          id: 3,
          name: 'Automaquillaje Kelly Texas',
          imgCourse: 'images/automaquillaje-texas.jpg',
        }
      ],
      dataStore: [
        {
          id: 1,
          title: 'Juego de Brochas Salam',
          code: 'BLACK - Musu Cosmetic -3305/052',
          description1: 'Salam es el saludo isl&aacute;mico y significa paz. <br/> Las brochas del maquillador son el primer contacto que tiene el cliente con el maquillaje. Son el primer encuentro. Y esto explica por qu&eacute; son tan importantes',
          description2: 'El set de brochas "Salam" cuenta con 25 piezas indispensables tanto pra quien apenas comienza a dar sus primeros pasos como para los m&aacute;s experimentados.',
          thumbnails: '',
          image: ''
        }
      ]
    };

    // this.nextSlide = this.nextSlide.bind(this);
    // this.showSlider = this.showSlider.bind(this);


  }
  // nextSlide(n){
  //     showSlider(indice+=n);
  // }






  render() {
    const { data } = this.state;
    const { dataStore } = this.state;
    return (
      <>
        <Header />
        <Frontcover />
        <Biography />
        <Course list={data} />
        <Store />
      </>
    )
  }
}

export default Home;