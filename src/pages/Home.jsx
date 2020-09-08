import React from 'react';
import Header from '../components/Header'; 
import Frontcover from '../components/Frontcover';
import Biography from '../components/Biography';
import Course from '../components/Course';
import CourseItem from '../components/CourseItem';
import ProductService from '../service/product.service'
import Product from '../models/product.model'

class Home extends React.Component{
    
    constructor(props){
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
            ]
          };
          
          // this.nextSlide = this.nextSlide.bind(this);
          // this.showSlider = this.showSlider.bind(this);


          var product = new Product(
              ' ' , 
              'testeando guardar con modelo' , 
              'BLACK - Musu Cosmetic -3305/052' , 
              [
                'El set de brochas \"Salam\" cuenta con 25 piezas indispensables tanto pra quien apenas comienza a dar sus primeros pasos como para los m&aacute;s experimentados.'
              ],
              'modificacion.png'
            
            )
          
        //  llamada a la api
        //  traer todos los productos
          ProductService.getAll()
          .then(
            (data) => {
              console.log(data)
            }
          )

              
    }
    // nextSlide(n){
          //     showSlider(indice+=n);
          // }






    render(){
        return(
            <>
            <Header/>
            <Frontcover/>
            <Biography/>
            <Course>
                {this.state.data.map(character => (
                    <CourseItem key={character.ref}{...character} />
                ))}
            </Course>
            </>
    )
    }
}

export default Home;