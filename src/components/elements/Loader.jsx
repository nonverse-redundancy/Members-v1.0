import React, { useEffect } from 'react';
import { useState } from 'react';

import { ClipLoader } from 'react-spinners';

function Loader() {

    const loading = true
    const [delayed, setDelayed] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDelayed(true)
        }, 5000);
    })

    return (
        <div className="loader-cont">
            <div className="loader">
                <ClipLoader size={50} color={"#4995FD"} loading={loading}/>
            </div>
            {delayed ? (
                <span className="load-warn-svr text-primary">We seem to be having trouble connecting to our servers <br />Please try again later</span>
            ) : ''}
        </div>
    )
}

export default Loader