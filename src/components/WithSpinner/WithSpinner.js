import React from 'react'
import Spinner from "./../Spinner/Spinner"

const WithSpinner = WrappedComponent => {
    return ({isLoading, ...otherProps}) => {
        console.log('isLoading', isLoading, '| WrappedComponent: ',WrappedComponent.name, otherProps);
        return isLoading ? (
            <Spinner/>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
};

export default WithSpinner;