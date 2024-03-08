import React from "react";
import Header from "../Layout/Header"
import AddRandomContact from "./AddRandomContact"
import RemoveAllContact from "./RemoveAllContact"
import FavoriteContact from "./FavoriteContact"
import GeneralContact from "./GeneralContact"
import AddContact from "./AddContact";
import Footer from "../Layout/Footer"


class ContactIndex extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            contactList : [
                {
                    id: 1,
                    name: "Ben Parker",
                    phone: "666-666-666-7770",
                    email: "benparket@noemail.com",
                    isFavorite: false
                },
                {
                    id: 2,
                    name: "Kathy Patrick",
                    phone: "111-111-111-7770",
                    email: "kathypatrick@noemail.com",
                    isFavorite: true
                },
                {
                    id: 3,
                    name: "Paul Show",
                    phone: "999-999-999-7770",
                    email: "paulshow@noemail.com",
                    isFavorite: true
                },
            ],
            selectedContact : undefined,
            isUpdating: false
        }
    }

    handleAddContact = (newContact)=>
    {

        if(newContact.name == "")
        {
           return{ status:"error", message: "please enter a valid Name"}
        }
        else if(newContact.phone == "")
        {
            return { status: "error", message: "please enter a valid Phone"}
        }

        const duplicateContact = this.state.contactList.filter((x)=>
        {
            if(x.name == newContact.name && x.phone == newContact.phone)
            {
                return true;
            }
        })

        if(duplicateContact.length > 0)
        {
            return{ status: "error", message: "duplicate record"}
        }
        else
        {
            const finalContact = 
            {
                ...newContact, 
                    id: this.state.contactList[this.state.contactList.length - 1].id + 1, 
                    isFavorite: false
            };

            this.setState((prevState)=>{
                return{
                    contactList: prevState.contactList.concat([finalContact])
                }
            })
            return{status: "success", message:"contact added succesfully"}
        }
        
    }

    handleToggleFavorite = (contact)=>
    {
        this.setState((prevState)=>{
            return{
                contactList: prevState.contactList.map((obj)=>{
                    if(obj.id == contact.id){
                        return{...obj, isFavorite: !obj.isFavorite}
                    }
                    return obj;
                })
            }
        })
    }

    handleRemoveContact = (contactId) =>{
        this.setState((prevState)=>{
            return{
                contactList: prevState.contactList.filter((obj)=>{
                    return obj.id !== contactId;
                })
            }
        })
    }


    handleRemoveAllContact = () =>{
        this.setState(()=>{
            return{
                contactList : []
            }
        })
    }



    handleAddRandomContact = (newContact) =>{
        const finalContact = 
        {
            ...newContact, 
                id: this.state.contactList[this.state.contactList.length - 1].id + 1, 
                isFavorite: false
        };
        this.setState((prevState)=>{
            return{
                contactList: prevState.contactList.concat([finalContact])
            }
        })
    }

    
    handleUpdateClick = (contact) =>{
        this.setState((prevState)=>{
            return{
                selectedContact: contact,
                isUpdating: true
            }
        })
    }

    handleCancelUpdatecontact = (contact) =>{
        this.setState((prevState)=>{
            return{
                selectedContact: undefined,
                isUpdating: false
            }
        })
    }


    handleUpdateContact = (updatedContact)=>
    {

        if(updatedContact.name == "")
        {
           return{ status:"error", message: "please enter a valid Name"}
        }
        else if(updatedContact.phone == "")
        {
            return { status: "error", message: "please enter a valid Phone"}
        }


            this.setState((prevState)=>{
                return{
                    contactList: prevState.contactList.map((obj)=>{
                        if(obj.id == updatedContact.id){
                            return{
                                ...obj,
                                name: updatedContact.name,
                                email: updatedContact.email,
                                phone: updatedContact.phone
                            }
                        }
                        return obj;
                    }),
                    isUpdating: false
                }
            })
            return{status: "success", message:"contact updated succesfully"}
        
    }


    render(){
        return(
            <div>
                <Header />
                <div className="container" style={{minHeight: "85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2 row">
                            <AddRandomContact 
                                handleAddRandomContact={this.handleAddRandomContact}

                                />
                        </div>
                        <div className="col-4 row">
                            <RemoveAllContact handleRemoveAllContact={this.handleRemoveAllContact} />
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <AddContact 
                                    handleAddContact={this.handleAddContact}
                                    isUpdating={this.state.isUpdating}
                                    selectedContact={this.state.selectedContact} 
                                    cancelUpdateContact = {this.handleCancelUpdatecontact}
                                    handleUpdateContact = {this.handleUpdateContact}
                                />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <FavoriteContact 
                                    contacts={this.state.contactList.filter((u)=>u.isFavorite == true)}
                                    handleToggleFavorite={this.handleToggleFavorite}
                                    handleRemoveContact={this.handleRemoveContact}
                                    handleUpdateClick={this.handleUpdateClick}
                                />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <GeneralContact 
                                    contacts={this.state.contactList.filter((u)=>u.isFavorite == false)}
                                    handleToggleFavorite={this.handleToggleFavorite}
                                    handleRemoveContact={this.handleRemoveContact}
                                    handleUpdateClick={this.handleUpdateClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}

export default ContactIndex;