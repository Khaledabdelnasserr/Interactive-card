import React, { useState } from 'react';
import './Main.css';
import front_img from '../../assets/images/bg-card-front.png';
import back_img from '../../assets/images/bg-card-back.png';
import card_logo from '../../assets/images/card-logo.svg';
import success from '../../assets/images/icon-complete.svg';

const Main = () => {
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [cvc, setCvc] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // State to control form submission

    // Function to handle name change (convert to uppercase)
    const handleNameChange = (e) => {
        const upperCaseName = e.target.value.toUpperCase(); // Convert to uppercase
        setCardName(upperCaseName);
    };

    // Function to handle card number change
    const handleCardNumberChange = (e) => {
        let inputValue = e.target.value.replace(/\D/g, ''); // Remove non-digit characters

        // Add spaces every 4 digits and limit the input to 16 digits
        if (inputValue.length <= 16) {
            inputValue = inputValue.replace(/(.{4})/g, '$1 ').trim(); // Add space after every 4 digits
            setCardNumber(inputValue);
        }
    };

    // Function to handle month change
    const handleMonthChange = (e) => {
        const value = e.target.value;
        if (value.length <= 2) {
            setMonth(value);
        }
    };

    // Function to handle year change
    const handleYearChange = (e) => {
        const value = e.target.value;
        if (value.length <= 2) {
            setYear(value);
        }
    };

    // Function to handle CVC change
    const handleCvcChange = (e) => {
        const value = e.target.value;
        if (value.length <= 3) {
            setCvc(value);
        }
    };

    // Function to handle form submission and validation
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior (page reload)

        // Check if all fields are filled
        if (cardName && cardNumber && month && year && cvc) {
            setIsSubmitted(true); // Set submitted to true
        } else {
            alert('Please fill all fields before submitting');
        }
    };

    return (
        <div className={`main-form ${isSubmitted ? 'show-success' : ''}`}>
            <div className="main-container">
                {/* left images */}
                <div className='images'>
                    <img className='front-img' src={front_img} alt="" />
                    <img className='back-img' src={back_img} alt="" />

                    <div className='back-cvc-div'>
                        <h2 className='back-cvc'>{cvc || '000'}</h2>
                    </div>

                    <div className='card-content-front'>
                        <img className='card-logo' src={card_logo} alt="" />
                        <h2 className='card-number-front'>{cardNumber || '0000 0000 0000 0000'}</h2>
                        <div className='name-date-front'>
                            <p id='name-front'>{cardName || 'THE NAME'}</p>
                            <h2 id='date-front'>{month || '00'}/{year || '00'}</h2>
                        </div>
                    </div>
                </div>

                {/* Conditional rendering based on form submission */}
                {!isSubmitted && (
                    <form className='main-right-form'>
                        <div className="name-number">
                            <h3 className='p-name'>CARDHOLDER NAME</h3>
                            <input
                                className='input-name'
                                type="text"
                                placeholder='e.g JANE APPLESEED'
                                value={cardName}
                                onChange={handleNameChange}
                                required
                            />

                            <h3 className='number'>CARD NUMBER</h3>
                            <input
                                className='input-number-name'
                                type="text"
                                placeholder='e.g. 2343 5683 2913 8433'
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                maxLength={19}
                                required
                            />
                        </div>

                        <div className='date-cvc'>
                            <div className='month'>
                                <p className='m'>EXP. DATE  (MM/YY)</p>
                                <input
                                    className='month-input'
                                    type="number"
                                    placeholder='MM'
                                    value={month}
                                    onChange={handleMonthChange}
                                    required
                                />
                                <input
                                    className='year-input'
                                    type="number"
                                    placeholder='YY'
                                    value={year}
                                    onChange={handleYearChange}
                                    required
                                />
                            </div>

                            <div className='cvc'>
                                <p className='cvc-text'>CVC</p>
                                <input
                                    className='cvc-input'
                                    type="number"
                                    placeholder='e.g. 123'
                                    value={cvc}
                                    onChange={handleCvcChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className='button-confirm'>
                            <button id='confirm' onClick={handleSubmit}>Confirm</button>
                        </div>
                    </form>
                )}

                {/* success section  */}
                {isSubmitted && (
                    <div className='success-section'>
                        <div className="success-container">
                            <img src={success} alt="success" />
                            <h2>THANK YOU!</h2>
                            <p>We've added your card details</p>
                            <button>Continue</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;
