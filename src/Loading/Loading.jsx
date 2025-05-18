import React from 'react';
import { Atom } from 'react-loading-indicators';

const Loading = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <Atom 
            color="#7c847c" 
            size="medium" 
            text="" 
            textColor="#65d30b" 
            />
        </div>
    );
};

export default Loading;