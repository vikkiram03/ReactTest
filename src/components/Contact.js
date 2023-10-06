import {useEffect, useState} from "react";
import Axios from "axios";

function Contact() {
    const [name,setName] = useState("Vikram");
    const [data, setData] = useState([]);
    // const [x, setx] = useState(defaultvalue)
    // callback function
    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            // 404 => error
            // 200 => success (OK)
            if (res.status === 200) {
                // All elements in url displayed in console
                console.log(res.data);
                setData(res.data);
            }
            else {
                Promise.reject();
            }
        })
        .catch((err) => alert(err))
    }, [])

    const ContactDetails = () => {
        return data.map((val) => {
            return <p>{val.name} - {val.phone}</p>
        })
    }

    return (
        <div>
            <h1> The owner of this page is {name} </h1>
            <button onClick={() => {setName("Markiv")}}> Change owner </button> <br/><br/>
            {ContactDetails()}
        </div>
    )
}

export default Contact;