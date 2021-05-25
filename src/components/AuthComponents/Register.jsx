import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return(
        <div>
        <h2> Registration Page</h2>
        <div>
            <form>
                <div>
                    <input placeholder="First Name"></input>
                </div>

                <div>
                    <input placeholder="Last Name"></input>
                </div>

                <div>
                    <input placeholder="Email"></input>
                </div>
                
                <div>
                    <input placeholder="Password"></input>
                </div>

                <div>
                    <input placeholder="Re-enter Password"></input>
                </div>

                <button>Register</button>
            </form>

            <p> Already have an account? <Link to="/login"> Login!</Link> </p>


        </div>
    </div>
    );
}

export default Register;