import React from 'react';

const Button = React.memo(({ title, disabled, icon, clickAction, className, aria_label }) => {

    return (
        <button
            onClick={() => clickAction()}
            className={`${className} `}
            aria-label={aria_label}
            disabled={disabled && disabled}
        >
            {icon && <span>{icon}</span>}
            {title && <span >{title}</span>}

        </button >
    );
});


export default Button;
