import { useState } from "react";
import Inputs from "./Inputs";


export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [city, setCity] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactChange = (event) => {
    setContactNo(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div>
      <div>
        {!isSubmitted ? (
          <>
            <h2>General Information</h2>
            <form>
              <Inputs label="Name" type="text" onChange={handleNameChange} />
              <Inputs label="City" type="text" onChange={handleCityChange} />
              <Inputs label="E-Mail" type="email" onChange={handleMailChange} />
              <Inputs
                label="Contact No."
                type="text"
                onChange={handleContactChange}
              />
              <button onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </>
        ) : (
          <>
            <div>
                <div>
                    <h1>{name || "Your Name"}</h1>
                    <div> 
                        {city && <span>{city}</span>}
                        {email && <span > {email}</span>}
                        {contactNo && <span > {contactNo}</span>}
                    </div>
                </div>
            </div>
            <button onClick={() => setIsSubmitted(false)}>Edit </button>
          </>
        )}
      </div>
    </div>
  );
}
