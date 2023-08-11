import { useState } from "react";

const FormValidation = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        finalpassword: ''
    })
    const [Formerror, setFormerror] = useState({});
    const handleChange = (e) => {
        setInput({
            ...input, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        setFormerror(validateForm(input));
    }
    const validateForm = (value) => {
        const err = {};
        if (!value.name) {
            err.name = "Name is required";
        }
        if (!value.email) {
            err.email = "Email is required";
        }
        if (!value.password) {
            err.password = "Password is required";
        }
        if (!value.finalpassword) {
            err.finalpassword = "Confirm Password is required";
        }
        return err;
    }
    return (
        <center>
            <div className="container">
                <div className="column1">
                    <form id="form" className="form">
                        <h2>Form Validation With Us</h2>
                        <div className="form-control">
                            <label htmlFor='username'>Username</label>
                            <input type="text" id="username" placeholder="Enter username" name="name" onChange={handleChange} />
                            <h6 className="text-align-left">{Formerror.name}</h6>
                            
                        </div>
                        <div className="form-control">
                            <label htmlFor='email'>Email</label>
                            <input type="text" id="email" placeholder="Enter email" name="email" onChange={handleChange} />
                            <h6 className="text-align-left">{Formerror.email}</h6>
                            
                        </div>
                        <div className="form-control">
                            <label htmlFor='password'>Password</label>
                            <input type="password" id="password" placeholder="Enter password" name="password" onChange={handleChange} />
                            <h6 className="text-align-left">{Formerror.password}</h6>
                        
                        </div>
                        <div className="form-control">
                            <label htmlFor='password2'>Confirm Password</label>
                            <input type="password" id="password2" placeholder="Enter password again" name="finalpassword" onChange={handleChange} />
                            <h6 className="text-align-left">{Formerror.finalpassword}</h6>

                            
                        </div>
                        <button type="button" value={'Submit'} onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
                <div className="column2">
                    <img src="https://i.ibb.co/k5NNz4F/pablo-sign-up.png" alt="pablo-sign-up" border="0" className='signup-image' />
                </div>
            </div>
        </center>
    )
}

export default FormValidation;
