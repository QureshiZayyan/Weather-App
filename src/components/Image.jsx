import React from 'react';

const Image = ({ imgsrc }) => {
    return (
        <div>
            <img src={imgsrc} alt='' className="w-[190px]" />
        </div>
    )
}

export default Image;
