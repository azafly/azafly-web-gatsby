import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface LocationProps {
    loaded: boolean;
    userCurrentCountry: any;
    error?: string;
    isAfrica?: boolean;
}

const useGeolocation = () => {
    const [location, setLocation] = useState<LocationProps>({ loaded: false, locations: null, error: '' });

    const getCountriesByRegion = async () =>
        axios.get(`https://us-central1-pick-safe.cloudfunctions.net/countryList`).then(({ data }) => data.countriesByRegion);

    const getUserGeoLocationData = async () =>
        axios.get(`https://geolocation-db.com/json/${process.env.GEOLOCATION_KEY}`).then(({ data }) => data.country_name);

    const getUserGeolocationDetails = async () => {
        const [countriesByRegion, userCurrentCountry] = await Promise.all([getCountriesByRegion(), getUserGeoLocationData()]);

        const isAfrica = userCurrentCountry in countriesByRegion.Africa;

        setLocation({
            loaded: true,
            userCurrentCountry,
            isAfrica
        });
    };

    useEffect(() => {
        getUserGeolocationDetails();
    }, []);

    return {
        location
    };
};

export default useGeolocation;
