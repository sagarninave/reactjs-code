import React, { memo } from 'react';

function FunctionalChildMemo(props){
  console.log("Memo Child : ", props.number);
  return(
    <div>
      <span> Child Value : {props.number}</span>
    </div>
  )
}
export default memo(FunctionalChildMemo); 