import Contact from "./Contact"
const FavoriteContacts = ({contacts, handleToggleFavorite, handleRemoveContact, handleUpdateClick}) =>{
    return(
        <div 
            className="col-12 py-2"
                style={{borderRadius: "10px", backgroundColor: "#323637"}}
            >
            <div className="text-center text-white-50">Favorites</div>
            <div className="p-2">
                {
                    contacts.map((contact,index)=>
                    (
                        <Contact 
                            contact={contact} 
                            key={index}
                            handleToggleFavorite={handleToggleFavorite}
                            handleRemoveContact={handleRemoveContact}
                            handleUpdateClick={handleUpdateClick}>
                        </Contact>
                    )
                )}
            </div>
        </div>
    )
}

export default FavoriteContacts;