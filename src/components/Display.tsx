import React from 'react';
type DisplayType = {
   name: number
   className: string
}
export const Display: React.FC<DisplayType> = (props) => {
   return (
      <h1 className={props.className}>
         {props.name}
      </h1>
   );
};