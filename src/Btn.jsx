import React from 'react';

export default function Btn(props){ // child to parent data bind
    return (<>
        {Array.from(Array(10), (e, i) => {
            return (
                <div className="col-md-2 my-2">
                    <button key={i} onClick={()=>props.onChildClick(i)} className="btn-sm btn-info">{i}</button>
                </div>
            );
        })}
    </>);
}