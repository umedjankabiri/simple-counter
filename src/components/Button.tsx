import React from 'react';
type ButtonType = {
   name: string
   className?: string
   onClick: ()=> void
   isDisable?: boolean
}
export const Button: React.FC<ButtonType> = ({name, onClick, isDisable, className}) => {
   return (
      <button onClick={onClick} disabled={isDisable} className={className}>
         {name}
      </button>
   );
};
