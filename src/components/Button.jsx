import React from 'react';

const Button = React.memo(({ title, disabled, icon, clickAction, className, arrowIcon, subTitle, rotatedArrow, titleStyle, subStyle, aria_label }) => {

    return (
        <button
            onClick={() => clickAction()}
            className={`${className} `}
            aria-label={aria_label}
            disabled={disabled && disabled}
        >
            {rotatedArrow && <span className='rotate-180'>{rotatedArrow}</span>}
            {icon && <span>{icon}</span>}
            {title && subTitle ?
                <div className='flex flex-col'>
                    <span className={titleStyle}>{title}</span>
                    <span className={subStyle}>{subTitle}</span>
                </div>
                :
                <span>{title}</span>
            }
            {arrowIcon && <span>{arrowIcon}</span>}
        </button >
    );
});


export default Button;
