import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useGeolocation = () => {
    const [location, setLocation] = useState({ loaded: false, locations: null, error: '' });
    const [countryList, setCountryList] = useState<string[]>([]);

    const onError = (error: any) => {
        setLocation({
            loaded: true,
            error
        });
    };

    const getUserGeolocationDetails = async () => {
        await axios
            .get(`https://us-central1-pick-safe.cloudfunctions.net/countryList`)
            .then(list => {
                setCountryList(list.data.countriesByRegion);
            })
            .catch(error => {
                console.log(error);
            });

        await axios
            .get(`https://geolocation-db.com/json/${process.env.GEOLOCATION_KEY}`)
            .then(countryItem => {
                setLocation({
                    loaded: true,
                    locations: countryItem.data.country_name
                });
                // setCountry(countryItem.data.country_name);
            })
            .catch(error => {
                onError({
                    code: 0,
                    loaded: false,
                    message: 'Geolocation not supported'
                });
            });
    };
    useEffect(() => {
        getUserGeolocationDetails();
    }, []);

    const countryLocation = {
        countryList,
        location
    };

    return countryLocation;
};

export default useGeolocation;
