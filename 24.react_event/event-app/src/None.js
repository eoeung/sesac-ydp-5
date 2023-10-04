import { useState } from 'react';

const None = () => {
    const [isNone, setIsNone] = useState(false);
    let btnMsg, msg;
    btnMsg = msg = '';

    if(!isNone){
        btnMsg = '사라지기';
        msg = '안녕하세요';
    } else{
        btnMsg = '나타나기';
        msg = '';
    }

    return(
        <div>
            <button onClick={() => setIsNone(!isNone)}>{btnMsg}</button>
            <h1>{msg}</h1>
        </div>
    )
};

export default None;
