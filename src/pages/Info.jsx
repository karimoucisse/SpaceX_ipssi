import React, {useEffect, useState} from 'react';
import {getCompagny} from "../datas/spaceXCompagny";

const Info = () => {
    const [infomation, setInformation] = useState(null);

    const getData = async () => {
        const data = await getCompagny();
        setInformation(data ? data : null);
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            {}
        </>
    );
}

export default Info