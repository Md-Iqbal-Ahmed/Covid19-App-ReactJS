import React from 'react';
import {Cards, Chart, CountryPicker, CoronaTable} from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import image from '../src/img/covid-19.jpg'

class App extends React.Component{

    state={

        data: {},
        country: ''
    }

    async componentDidMount(){

        const fetchedData = await fetchData();

        return this.setState({data: fetchedData});

    }

    handleCountryChange = async(country) =>{

        const fetchedData = await fetchData(country);


        return this.setState({data: fetchedData, country: country});


    }

    render(){

            const { data } = this.state;
         

        return(

            
            <div className={styles.container}>

               <img className={styles.image} src={image}/>
                
                <Cards data={data}/><br/><br/>  
               
                <CountryPicker handleCountryChange={this.handleCountryChange}/><br/>
               
                <Chart data={data} country={this.state.country}/>

              

            </div>

        )
    }

}

export default App;