import React, { useEffect } from 'react';

const UseTitle = ({children}) => {
    window.title = `${children} | EasySell`
};

export default UseTitle;