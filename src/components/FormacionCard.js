const FormacionCard = (props)=>{
    const {titulo, estado, id} = props;

    return(
        <ul id={id}>
        
            <li className="title">{titulo}</li>
            <p>{estado}</p>
       
        </ul>        
    )
}

export default FormacionCard;