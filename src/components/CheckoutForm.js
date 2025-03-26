// import React, { useState } from "react";
// import "../styles/_checkout.scss";  // Import SASS

// const CheckoutForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({ name: "", email: "", address: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <form className="checkout-form" onSubmit={(e) => onSubmit(e, formData)}>
//       <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
//       <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
//       <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
//       <button type="submit">Place Order</button>
//     </form>
//   );
// };

// export default CheckoutForm;
