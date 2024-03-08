const Contact = ({contact, handleToggleFavorite, handleRemoveContact, handleUpdateClick}) =>{
    return(
        <div className="row p-md-2 mb-2"
            style={{ borderRadius: "20px", border: "1px solid #555"}}
        >
            <div className="col-2 col-md-1 pt-2 pt-md-1">
                <img 
                    src={`https://ui-avatars.com/api/?name=${contact.name}`}
                    style={{ width: "80%" }}
                    alt="">
                </img>
            </div>
            <div className="col-6 col-md-5 text-warning pt-0">
                <span className="h4">{contact.name}</span>
                <br/>
                <div className="text-white-50">
                    {contact.email}<br/>
                    {contact.phone}
                </div>
            </div>
            <div className="col-2 col-md2 pt-md-3 ">
                <button className={`btn btn-sm m-1} ${
                    contact.isFavorite ? "btn-warning" : "btn-outline-warning"}`}
                    onClick={() =>handleToggleFavorite(contact)}> 
                    <i className="bi bi-star" style={{ fontSize : "1rem"}}></i> 
                </button>
            </div>
            <div className="col-2 col-md-3 pt-md-3">
                <button 
                    className="btn btn-primary btn-sm m-1"
                    onClick={() =>handleUpdateClick(contact)}>
                <i className="bi bi-pencil-square" style={{fontSize: "1rem"}}></i>
                </button>
                <button 
                    className="btn btn-danger btn-sm m-1"
                    onClick={()=> handleRemoveContact(contact.id)}
                    >
                <i className="bi bi-trash3-fill" style={{fontSize: "1rem"}}></i>
                </button>
            </div>

        </div>
    )
}

export default Contact;