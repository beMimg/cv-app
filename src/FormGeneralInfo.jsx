import { useState } from "react";

export function FormGeneralInfo({ handleSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  let generalInfo = { name: name, email: email, phoneNumber: phoneNumber };

  function handleFormSubmit(e) {
    e.preventDefault();
    handleSubmit(generalInfo);
    setIsSubmit(true);
  }

  return (
    <div className="form-section">
      <h1 className="form-title">General Information</h1>
      {isSubmit ? (
        <button className="edit-btn" onClick={() => setIsSubmit(false)}>
          Edit
        </button>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="full-name">Name:</label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone-number">Phone Number:</label>
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="123123123"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
