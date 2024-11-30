import React, { useState } from 'react';
import UserAllData from './UserAllData';
import UserInfo from './UserInfo';

const Peta = () => {
    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [isUserShow, setIsUserInfoShow] = useState(false);
    const [allData, setAlldata] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    const handledata = (e) => {
        e.preventDefault();
        setAlldata([{ id: new Date().getTime(), name, myphone: phone, age, email }, ...allData]);
        setname('');
        setage('');
        setemail('');
        setphone('');
    };

    const showinfoHandler = (item) => {
        setUserInfo(item);
        setIsUserInfoShow(!isUserShow);
    };

    const goBackHandler = () => {
        setIsUserInfoShow(!isUserShow);
    };

    return (
        <>
            <h1 style={{ color: 'green', textAlign: 'center' }}>Student Details</h1>
            <div style={{ display: 'flex', justifyContent: 'center', background: 'lightblue', minHeight: '100vh', padding: '20px' }}>
                <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {isUserShow && <button onClick={goBackHandler}>Go Back</button>}
                    </div>

                    {!isUserShow && (
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '20px',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}
                        >
                            {/* Form Section */}
                            <div
                                style={{
                                    flex: '1 1 300px',
                                    backgroundColor: 'orangered',
                                    borderRadius: '1rem',
                                    padding: '20px',
                                }}
                            >
                                <form onSubmit={handledata} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        required
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                        style={{ height: '30px', borderRadius: '0.9em', padding: '5px' }}
                                    />

                                    <label>Age</label>
                                    <input
                                        type="text"
                                        placeholder="Enter age"
                                        required
                                        value={age}
                                        onChange={(e) => setage(e.target.value)}
                                        style={{ height: '30px', borderRadius: '0.9em', padding: '5px' }}
                                    />

                                    <label>Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        required
                                        value={email}
                                        onChange={(e) => setemail(e.target.value)}
                                        style={{ height: '30px', borderRadius: '0.9em', padding: '5px' }}
                                    />

                                    <label>Phone no</label>
                                    <input
                                        type="text"
                                        placeholder="Enter phone number"
                                        required
                                        value={phone}
                                        onChange={(e) => setphone(e.target.value)}
                                        style={{ height: '30px', borderRadius: '0.9em', padding: '5px' }}
                                    />

                                    <button type="submit" style={{ height: '40px', borderRadius: '0.9em', backgroundColor: 'green', color: 'white' }}>
                                        SUBMIT
                                    </button>
                                </form>
                            </div>

                            {/* Data Display Section */}
                            <div
                                style={{
                                    flex: '2 1 500px',
                                    backgroundColor: 'black',
                                    borderRadius: '1rem',
                                    color: 'white',
                                    padding: '20px',
                                }}
                            >
                                <UserAllData allData={allData} showUserInfo={showinfoHandler} />
                            </div>
                        </div>
                    )}

                    {isUserShow && <UserInfo userInfo={userInfo} goBackHandler={goBackHandler} />}
                </div>
            </div>
        </>
    );
};

export default Peta;
