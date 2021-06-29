import React from 'react';

import { ClipLoader } from 'react-spinners';

function Loader() {

    const loading = true

    return (
        <div className="loader">
            <ClipLoader size={50} color={"#4995FD"} loading={loading}/>
        </div>
    )
}

export default Loader