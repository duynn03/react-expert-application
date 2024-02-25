import React from "react";
import StorageChangeForm from "../components/storage/StorageChangeForm";
import StorageSubscriptionComponent from "../components/storage/StorageSubscriptionComponent";

const Exercise1 = React.memo(() => {
    return (
        <>
            <h1>Exercise 1</h1>
            <h6>Component 1</h6>
            <StorageChangeForm />
            <h6 className='mt-3'>Component 2</h6>
            <StorageSubscriptionComponent />
            <img
                src={process.env.PUBLIC_URL + '/img/Exercise1Checking.png'}
                alt="checking"
                width='100%'
            />
        </>
    );
});

export default Exercise1;