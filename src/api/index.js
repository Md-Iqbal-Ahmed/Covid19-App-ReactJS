import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const urlDaily = 'https://covid19.mathdro.id/api/daily';

const urlCountries = 'https://covid19.mathdro.id/api/countries'

export const fetchData = async (country) =>{

    let changeableUrl = url;

    if(country){

        changeableUrl = `https://covid19.mathdro.id/api/countries/${country}`

    }

    try{

        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);        

        return {confirmed, recovered, deaths, lastUpdate};      

    }
    catch(error){


        console.log(error)      

    }

}

export const fetchDailyData = async () => {

    try{

        const { data } = await axios.get(urlDaily);

            const modifiedData =  data.map((dailyData)=> ({

            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate

        }))

        return modifiedData;

    }
    catch(error){

        console.log(error)

    }

}

export const fetchDataCountries = async () =>{

    try{

        const { data: {countries} } = await axios.get(urlCountries);

                   
        return countries.map((country) => country.name);       
      

    }    
    catch(error){

        console.log(error)

    }

}


