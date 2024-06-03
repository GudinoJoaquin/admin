import { useState } from 'react';
import { USUARIO, updateUsuario } from '../assets/utils/constants';
import Input from '../components/Input';
import Nav from '../components/navBar';

export default function Configurar() {
  const [usuario, setUsuario] = useState({
    user: USUARIO.user,
    pass: USUARIO.pass,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
    console.log(`Campo ${name} cambiado a: ${value}`); // Para depuración
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado'); // Para depuración
    // Actualizar el objeto USUARIO
    updateUsuario({
      user: usuario.user,
      pass: usuario.pass,
    });
    console.log('Estado de usuario actualizado:', usuario); // Para depuración
    console.log('USUARIO actualizado después de submit:', USUARIO); // Para depuración
  };

  return (
    <div className="bg-white dark:bg-slate-900 h-[100.2vh] mt-[-2px] mb-[-2px]">
      <Nav />
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-200 dark:bg-slate-950 p-8 rounded-lg shadow-md mt-[60px]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-200 mb-6 text-center">
          Configuración
        </h2>

        <form method="post" onSubmit={handleSubmit}>
          <Input
            label="Usuario"
            type="text"
            name="user"
            value={usuario.user}
            placeholder=""
            onChange={handleChange}
          />

          <Input
            label="Contraseña"
            type="text"
            name="pass"
            value={usuario.pass}
            placeholder=""
            onChange={handleChange}
          />

          <div className="flex justify-center mt-[20px]">
            <button
              className="bg-gray-900 border text-gray-200 px-4 py-2 font-bold rounded-md hover:bg-gray-300 hover:text-gray-900 hover:border border-gray-900 transition duration-[.3s]"
              type="submit"
            >
              Cambiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
