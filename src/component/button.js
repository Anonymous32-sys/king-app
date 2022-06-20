
const parentComp=()=>{
    return(
       <div></div> 
    )
}
const sendMessage =(props)=>{ 
    // const{name , message,}=props
    return(
        <div>
            <p>{props.name}</p>
            <h1>{props.message}</h1>
            <button onClick={handleclick}>change</button>
            <FullComp/>
        </div>
    )
}
const FullComp =({name, message})=>{
    return(
        <>
            <h1>
                Thats Cool
            </h1>
            <p>{name}</p>
            <h3>{message}</h3>
        </>
    )
}
