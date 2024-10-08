import React, { useState, useRef, useEffect } from 'react';

const OTPInput = ({ length, onChange, clear }) => {

    const inputsRef = useRef([]);
    const [otp, setOtp] = useState(new Array(length).fill(''));

    useEffect(() => {

        const handleClear = () => {
            if (!clear) return
            setOtp(new Array(length).fill(''));
            inputsRef.current[0].focus();
        }

        handleClear()

    }, [clear, length])

    const handleChange = (element, index) => {
        const value = element.value.replace(/[^0-9]/g, '');

        // Ensure only a single digit is entered
        if (value.length > 1) {
            return;
        }

        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);
        onChange(updatedOtp.join(''));

        // Move focus to the next input field if there is a value and it is not the last field
        if (value && index < length - 1) {

            const nextIndex = index + 1;
            if (inputsRef.current && inputsRef.current[nextIndex]) {
                inputsRef.current[nextIndex].focus();
            }
        }
    };

    const handleBackspace = (event, index) => {
        if (event.key === 'Backspace' && !otp[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };
    return (
        <div className="flex gap-x-2">
            {otp?.map((_, index) => (
                <input
                    key={index}
                    type="text"
                    name={`input${index}`}
                    maxLength="1"
                    className="w-9 border h-9 inline-block text-center"
                    value={otp[index]}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleBackspace(e, index)}
                    ref={(el) => (inputsRef.current[index] = el)}
                />
            ))}
        </div>
    );
}

export default OTPInput;
