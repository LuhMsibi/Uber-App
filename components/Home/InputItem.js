'use client'
import { DestinationContext } from '@/context/DestinationContext';
import { SourceContext } from '@/context/SourceContext';
import React, { useContext, useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function InputItem({type}) {
    const [value, setValue] = useState(null);
    const [placeHolder, setPlaceHolder] = useState(null);
    const {source, setSource} = useContext(SourceContext);
    const {destination, setDestination} = useContext(DestinationContext);

    // useEffect(()=>{
    //     type=='source'?setPlaceHolder('Pickup Location'):setPlaceHolder('Dropoff Location')
    // })

    const getLatAndLong = (place, type) =>{
        const placeId =place.value.place_id;
        const service=new google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails({placeId}, (place, status)=>{
            if(status==='OK' && place.geometry && place.geometry.location){
                console.log(place.geometry.location.lat());
                if(type =='source'){
                   setSource({
                        lat:place.geometry.location.lat(),
                        lng:place.geometry.location.lng(),
                        name:place.formatted_address,
                        label:place.name
                   })

                }
                else{
                    setDestination({
                        lat:place.geometry.location.lat(),
                        lng:place.geometry.location.lng(),
                        name:place.formatted_address,
                        label:place.name
                   })

                }
            }
        })
    }
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      <img src={type=='source'?"/source.png": '/destination.png'} alt="pickup" width={15} height={15}/>
      <GooglePlacesAutocomplete  
      
         selectProps={{
            value,
            onChange: (place)=>{getLatAndLong(place, type); setValue(place)},
            placeholder: 'Pickup Location',
            isClearable: true,
            className: 'w-full',
            components: {
                DropdownIndicator: false
            },
            styles:{
                control: (provided) => ({
                    ...provided,
                    color: 'blue',
                    backgroundColor: '#00fff00',
                    border: 'none'
                  })
            }
          }}
      />
    </div>
  )
}

export default InputItem
