


export default function UserAllData(props) {
    const { allData,showUserInfo } = props
    console.log(allData)
    return (
        <>
            {allData.map((item, index, arr) =>
                <h4 onClick={()=>showUserInfo(item)} style={{ border: "1px solid", borderRadius: "10px", padding:"10px", margin:"10px", boxShadow:"inset 0 0 10px white", textAlign:"center",backgroundColor:'red' }}>
                    {item.name}
                </h4>
            )}


        </>
    )
}