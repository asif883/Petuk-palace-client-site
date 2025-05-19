import React from 'react';
import { Atom } from 'react-loading-indicators';

const Loading = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <Atom 
            color="#1E2939" 
            size="medium" 
            text="" 
            textColor="#65d30b" 
            />
        </div>
    );
};

export default Loading;