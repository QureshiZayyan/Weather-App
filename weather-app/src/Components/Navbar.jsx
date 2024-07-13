// // Navbar.js
// import React, { useState } from 'react';

// export const Navbar = ({ onSearch }) => {
//   const [city, setCity] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (city.trim()) {
//       onSearch(city.trim());
//     }
//   };

//   const handleReload = () => {
//     window.location.reload();
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-black overflow-hidden">
//       <div className="container-fluid">
//         <a className="navbar-brand text-white fw-bolder" href="#" onClick={handleReload}>Get Weather</a>
//         <form className="d-flex justify-content-end form" onSubmit={handleSearch}>
//           <input
//             className="form-control me-1 w-50"
//             type="search"
//             placeholder="Enter City"
//             aria-label="Search"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//           <button className="btn text-white btn-outline-light bg-black" type="submit">Search</button>
//         </form>
//       </div>
//     </nav>
//   );
// };
