export function TodoDisplay(props){
    return(
        <>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <button onClick={onclickfn}>{props.completed==="true"?"Completed":"Mark as Complete"}</button>
        </>
    )
}