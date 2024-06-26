// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import './ReclamoForm.css'

// const ReclamoForm = () => {
//   const [nombre, setNombre] = useState('');
//   const [email, setEmail] = useState('');
//   const [mensaje, setMensaje] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/reclamos', { nombre, email, mensaje });
//       setNombre('');
//       setEmail('');
//       setMensaje('');
//       alert('Solicitud enviada con éxito');
//     } catch (err) {
//       console.error('Error al enviar solicitud:', err);
//       alert('Error al enviar solicitud');
//     }
//   };

//   return (
    
//     <div className='Card'>

//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Nombre:</label>
//         <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>
//       <div>
//         <label>Mensaje:</label>
//         <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} required />
//       </div>
//       <button type="submit">Enviar</button>
//     </form>
//     </div>
//   );
// };

// export default ReclamoForm;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './ReclamoForm.css';

const ReclamoForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/reclamos', { nombre, email, mensaje });
      setNombre('');
      setEmail('');
      setMensaje('');
      alert('Solicitud enviada con éxito');
    } catch (err) {
      console.error('Error al enviar solicitud:', err);
      alert('Error al enviar solicitud');
    }
  };

  return (
    <div className='Card'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Mensaje:</label>
          <textarea className="form-control" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary2">Enviar</button>
      </form>
    </div>
  );
};

export default ReclamoForm;

