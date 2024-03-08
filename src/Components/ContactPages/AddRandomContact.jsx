import { getRandomUser } from "../../Utility/api"

const GetRandomContact = async (random) =>{
    const responseFromApi = await getRandomUser();
    console.log(responseFromApi)
    const randomPerson = {
        name: responseFromApi.data.first_name + " " + responseFromApi.data.last_name,
        email: responseFromApi.data.email,
        phone: responseFromApi.data.phone_number
    }
    return random(randomPerson)
}

const AddRandomContact = ({handleAddRandomContact}) =>{
    return(
        <div>
           <button 
            className="btn btn-success form-control"
            onClick={()=> GetRandomContact(handleAddRandomContact)}>
            Add Random Contact
           </button>
        </div>
    )
}
export default AddRandomContact