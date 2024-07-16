import React from 'react';

const Button = React.memo(({ title, disabled, icon, clickAction, className, subTitle, titleStyle, subStyle, aria_label }) => {

    return (
        <button
            onClick={() => clickAction()}
            className={`${className} `}
            aria-label={aria_label}
            disabled={disabled && disabled}
        >
            {icon && <span>{icon}</span>}
            {title && subTitle ?
                <div className='flex flex-col'>
                    <span className={titleStyle && titleStyle}>{title}</span>
                    <span className={subStyle}>{subTitle}</span>
                </div>
                :
                <span>{title}</span>
            }
        </button >
    );
});


export default Button;
