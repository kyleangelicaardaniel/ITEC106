import React from 'react';


const appStyle = {
    height: '100px',
    display: 'flex'
};

const formStyle = {
	align: 'center',
    margin: 'auto',
    padding: '10px',
    border: '3px solid black',
    borderRadius: '5px',
    background: 'Pink',
    width: '250px',
    display: 'block'
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Times New Roman, Helvetica, sans-serif',
    fontSize: '20px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '10px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
};

const submitStyle = {
    margin: '20px 0 0 0',
    padding: '14px 20px',
    border: '2px solid #efffff',
    borderRadius: '6px',
    background: '#B6FCD5',
    width: '100%', 
    fontSize: '20px',
    color: '',
    display: 'block'
};

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
});

const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
      <form style={formStyle} onSubmit={handleSubmit} >
        <Field ref={usernameRef} label="Username:" type="text" />
        <Field ref={passwordRef} label="Password:" type="password" />
        <div>
          <button style={submitStyle} type="submit">Log in</button>
        </div>
      </form>
    );
};


const App = () => {
    const handleSubmit = data => {
        const json = JSON.stringify(data, null, 4);
        console.clear();
        console.log(json);
    };
    return (
      <div style={appStyle}>
        <Form onSubmit={handleSubmit} />
      </div>
    );
};

export default App;