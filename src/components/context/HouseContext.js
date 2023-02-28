import React, { createContext, useEffect, useState } from 'react'

import {housesData} from '../../data'

export const  HouseContext = createContext();
const HouseContextProvider = ({children}) => {

    const [houses,setHouses] = useState(housesData);
    const [country,setCountry] = useState('Location (any)')
    const [countries,setCountries] = useState([])
    const [property,setProperty] = useState('Property type (any)');
    const [properties,setProperties] = useState([])
    const [price,setPrice] = useState('Price range (any)')
    const [loading,setLoading] = useState(false)
    
    useEffect(()=>{
        const allCountries = houses.map((house)=>{
            return house.country
        })
        
        const uniqueCountries = ['Location (any)',...new Set(allCountries)]
        console.log(allCountries) 
        setCountries(uniqueCountries)
    },[])

    useEffect(()=>{
        const allProperties = houses.map((house)=>{
            return house.type
        })
        
       
        const uniqueProperties = ['Location (any)',...new Set(allProperties)]
        console.log(allProperties) 
        setProperties(uniqueProperties)
    },[])
    const handleClick=()=>{
      setLoading(true)
      // console.log(country,property,price)

      const isDefault = (str)=>{
        return str.split(' ').includes('(any)');
      }
      // console.log(isDefault(country))
      // get first value and parse it to number
      const minPrice = parseInt(price.split(' ')[0]);
      console.log(minPrice+"min")
      //get dsecond value of price which is maxm price and parse it to  number
      const maxPrice=parseInt(price.split(' ')[2]);
      console.log(maxPrice+"max")
      const newHouses=housesData.filter((house)=>{
        const housePrice=(parseInt(house.price))
        console.log(housePrice)
        // if all values are selected
        if(
          house.country===country &&
          house.type===property&&
          housePrice>=minPrice &&
          housePrice<=maxPrice
        ){
          return house
        }
        // if all default
        if(isDefault(country)&&isDefault(property)&&isDefault(price)){
          return house
        }

        // if country is not default
        if(!isDefault(country)&&isDefault(property)&&isDefault(price)){
          return house.country===country
        }
         // if property is not default
         if(isDefault(country)&&!isDefault(property)&&isDefault(price)){
          return house.type===property
        }
         // if price is not default
         if(isDefault(price)&&isDefault(property)&& !isDefault(country)){
          if(housePrice>=minPrice && housePrice<=maxPrice){
            return house
            
          }
        }
        // if country and property not default
         // if property is not default
         if(!isDefault(country)&&!isDefault(property)&&isDefault(price)){
          return house.country===country &&
          house.type===property
        }
         // if country and price is not default
         if(!isDefault(country)&&isDefault(property)&&!isDefault(price)){
          if(housePrice>=minPrice && housePrice<=maxPrice){
            return house.country===country
          }
        }
          // if property and price is not default
          if(isDefault(country)&&!isDefault(property)&&!isDefault(price)){
            if(housePrice>=minPrice && housePrice<=maxPrice){
              return house.type===property
            }
          }
      })
      console.log(newHouses)
      setTimeout(()=>{
        return newHouses.length<1 ? setHouses([]):
           setHouses(newHouses)
           
      },1000)
      setLoading(false)
    }
    console.log(houses)
  return (
    <HouseContext.Provider value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,setPrice,
        houses,
        loading,
        handleClick,
        loading

    }}>
      {children} 
    </HouseContext.Provider>
  )
}

export default HouseContextProvider
