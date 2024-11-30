const UserInfo = ({userInfo}) => {
  const {name, age,myphone, email} =userInfo

    return (
        <div style={{ border: "2px solid", borderRadius: "1em",width:"50%", height:"50vh", display:"flex", alignItems:"center",justifyContent:"center", gap:"10px", flexDirection:"column" }}>
            <p>
                Name:{name}
            </p>
            <p>
                Age : {age}
            </p>
            <p>
                Email : {email}
            </p>
            <p>
                Phone No : {myphone}
            </p>
        </div>
    )
}

export default UserInfo