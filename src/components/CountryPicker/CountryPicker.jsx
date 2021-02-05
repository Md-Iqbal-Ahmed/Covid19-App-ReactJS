import React, {useState,useEffect} from 'react';
import {FormControl, NativeSelect} from '@material-ui/core'
import {fetchDataCountries} from '../../api'
import styles from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {

    const [country, setCountry] = useState([]);

    useEffect(()=>{

        const fetchCountries = async () =>{
            setCountry(await fetchDataCountries())
        }

        fetchCountries();

        
                
    },[setCountry]);

       

    return (
        <div>
            <FormControl className={styles.container}>
                
                <NativeSelect defaultValue="" onChange={(event)=> handleCountryChange(event.target.value) }>
                    <option value="">Global</option>
                     {country.map((countryName,i)=><option key={i} value={countryName}>{countryName}</option>)}
                </NativeSelect>


            </FormControl>            
            
        </div>
    );
};

export default CountryPicker;