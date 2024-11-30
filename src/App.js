import React, { useState } from 'react';

function App() {
  const [n1, setn1] = useState('');
  const [n2, setn2] = useState('');
  const [results, setresult] = useState(null);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');

  const handlesum = () => {
    const c = parseFloat(n1) + parseFloat(n2);
    setresult(c);
  };

  return (
    <>
      <h1>This is a simple Application</h1>
      <div>
        <input
          type="number"
          placeholder="Enter number"
          onChange={(e) => setn1(e.target.value)}
          style={{ color: 'red', backgroundColor: 'black' }}
        />
        <br />
        <input
          type="number"
          placeholder="Enter number"
          onChange={(e) => setn2(e.target.value)}
          style={{ color: 'red', backgroundColor: 'black' }}
        />
        <br />
        <button onClick={handlesum}>ADD</button>
        <h1>SUM: {results}</h1>
      </div>
      <br />

      <div
        style={{
          height: '400px',
          width: '500px',
          backgroundColor: 'skyblue',
          marginLeft: '300px',
          marginTop: '100px',
        }}
      >
        <h1>Hi I am Raju, a DevOps Engineer</h1>
        <br />
        <label>Name</label>
        <br />
        <input
          type="text"
          placeholder="Please enter your name"
          required
          onChange={(e) => setname(e.target.value)}
        />
        <br />
        <label>Email Id</label>
        <br />
        <input
          type="email"
          placeholder="Please enter your email id"
          required
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <button
          style={{
            backgroundColor: 'yellow',
            color: 'red',
            border: 'none',
            height: '50px',
            width: '100px',
            borderRadius: '0.7em',
          }}
        >
          Submit
        </button>
      </div>
      <br />
      <h1 style={{ color: 'red' }}>Here is your Data</h1>
      <br />
      <div
        style={{
          height: '200px',
          width: '200px',
          backgroundColor: 'white',
          border: '2px solid red',
          borderRadius: '1em',
          marginLeft: '200px',
        }}
      >
        <label style={{ marginLeft: '20px' }}>Name</label>
        <h3 style={{ marginLeft: '20px', color: 'green' }}>{name}</h3>
        <br />
        <label style={{ marginLeft: '20px' }}>Email</label>
        <br />
        <h3 style={{ marginLeft: '20px', color: 'green' }}>{email}</h3>
      </div>
    </>
  );
}

export default App;
