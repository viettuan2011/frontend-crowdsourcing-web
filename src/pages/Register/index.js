import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXmark } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <div>
                    <h1>User Registration</h1>
                </div>

                <div className={cx('form-body')}>
                    <div className={cx('username')}>
                        <label for="username">Username </label>
                        <input onChange={handleName} type="text" id="usename" placeholder="Username" value={name} />
                    </div>
                    <div className={cx('email')}>
                        <label for="email">Email </label>
                        <input onChange={handleEmail} type="email" id="email" placeholder="Email" value={email} />
                    </div>
                    <div className={cx('password')}>
                        <label for="password">Password </label>
                        <input
                            onChange={handlePassword}
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                        />
                    </div>
                    <div className={cx('confirm-password')}>
                        <label for="confirmPassword">Confirm Password </label>
                        <input type="password" id="confirmPassword" placeholder="Confirm Password" />
                    </div>
                </div>
                <div className={cx('footer')}>
                    <button onClick={handleSubmit} type="submit" className={cx('btn-submit')}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
