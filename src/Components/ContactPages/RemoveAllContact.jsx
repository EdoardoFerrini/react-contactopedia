const RemoveAllContact = ({handleRemoveAllContact}) =>{
    return(
        <div>
           <button 
            className="btn btn-danger form-control"
            onClick={handleRemoveAllContact}
            >
            Remove All Contact
           </button>
        </div>
    )
}
export default RemoveAllContact;