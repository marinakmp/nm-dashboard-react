import React, { useState } from "react";
import WithSpinner from '../WithSpinner/WithSpinner';
import ColourView from "./ColourView";
import {useEffect} from "react";
import fetchUrl from "../../utilities/fetchUrl";

const ColourContainer = () => {
    const ColourViewWithSpinner = WithSpinner(ColourView);
    let [data, setData] = useState(null);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchUrl("colors.json")
            .then(response => {
                setData(response.data);
                setIsLoading(false);
            })
    },[]);

    return <ColourViewWithSpinner isLoading={isLoading} data={data} />;
};

export default ColourContainer;