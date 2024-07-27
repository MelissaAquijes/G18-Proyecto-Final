import { useSelector, useDispatch } from "react-redux";
import {
  getEmailInput,
  getPasswordInput,
  getPassword2Input,
  getNameInput,
  getLastnameInput,
} from "../../../../app/slices/formInputSlice";

export default function RegisterFields() {
  const footButtonColor = useSelector((state) => state.footButtonColor.color);
  const modBordersColor = useSelector((state) => state.modBordersColor.color);

  const handleButtonClass = () => {
    return "w-full h-3/5 rounded-xl hover:border-4 hover:duration-200 hover:text-xl".concat(
      footButtonColor,
      modBordersColor
    );
  };

  //Redux para el form
  const dispatch = useDispatch();
  const registerEmail = useSelector((state) => state.formInputs.emailInput);
  const registerPassword = useSelector(
    (state) => state.formInputs.passwordInput
  );
  const registerPassword2 = useSelector(
    (state) => state.formInputs.password2Input
  );
  const registerName = useSelector((state) => state.formInputs.nameInput);
  const registerLastname = useSelector(
    (state) => state.formInputs.lastNameInput
  );

  const handleRegisterEmailData = (event) => {
    dispatch(getEmailInput(event.target.value));
  };

  const handleRegisterPasswordData = (event) => {
    dispatch(getPasswordInput(event.target.value));
  };

  const handleRegisterPassword2Data = (event) => {
    dispatch(getPassword2Input(event.target.value));
  };

  const handleRegisterNameData = (event) => {
    dispatch(getNameInput(event.target.value));
  };

  const handleRegisterLastnameData = (event) => {
    dispatch(getLastnameInput(event.target.value));
  };

  /// Capturar los datos en el submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(
      registerEmail,
      registerPassword,
      registerPassword2,
      registerName,
      registerLastname
    );
  };

  return (
    <form
      id="registerFields"
      onSubmit={handleFormSubmit}
      className="w-full h-[85%] flex flex-col justify-center gap-2 items-center rounded-xl"
    >
      <section className="w-full h-[70%] flex flex-col justify-center items-center gap-4 rounded-xl bg-lavender">
        <div
          id="emailRegisterField"
          className="w-full h-1/5 flex border-4 rounded-xl"
        >
          <i className="fa-solid fa-at w-[10%] h-[100%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>
          <input
            type="email"
            name="emailRegister"
            placeholder="Email"
            className="w-full h-full p-[3%] rounded-r-lg outline-none"
            value={registerEmail}
            onChange={handleRegisterEmailData}
          />
        </div>

        <div id="nameField" className="w-full h-1/5 flex justify-between">
          <div className="w-[49%] h-full flex border-4 rounded-xl">
            <i className="fa-solid fa-user w-[23%] h-full flex justify-center items-center rounded-l-[8px] border-r-4"></i>
            <input
              type="text"
              name="name"
              placeholder="Nombre(s)"
              className="w-full h-full p-[3%] rounded-r-lg outline-none"
              value={registerName}
              onChange={handleRegisterNameData}
            />
          </div>

          <div className="w-[49%] h-full flex border-4 rounded-xl">
            <i className="fa-solid fa-user w-1/5 h-full flex justify-center items-center rounded-l-[8px] border-r-4"></i>
            <input
              type="text"
              name="lastName"
              placeholder="Apellidos"
              className="w-full h-full p-[3%] rounded-r-lg outline-none"
              value={registerLastname}
              onChange={handleRegisterLastnameData}
            />
          </div>
        </div>

        <div
          id="pswdFieldRegister"
          className="h-1/5 w-full flex border-4 rounded-xl"
        >
          <i className="fa-solid fa-key w-[10%] h-full flex justify-center items-center rounded-l-[8px] border-r-4"></i>
          <input
            type="password"
            name="pswdRegister"
            placeholder="Contraseña"
            className="w-full h-full p-[3%] rounded-r-lg outline-none"
            value={registerPassword}
            onChange={handleRegisterPasswordData}
          />
        </div>

        <div
          id="confirmPswdField"
          className="h-1/5 w-full flex border-4 rounded-xl"
        >
          <i className="fa-solid fa-lock w-[10%] h-full flex justify-center items-center rounded-l-[8px] border-r-4"></i>
          <input
            type="password"
            name="confirmPswd"
            placeholder="Confirmar Contraseña"
            className="w-full h-full p-[3%] rounded-r-lg outline-none"
            value={registerPassword2}
            onChange={handleRegisterPassword2Data}
          />
        </div>
      </section>

      <section id="submitAllRegister" className="w-full h-[25%] font-bold">
        <div className="h-2/5 text-sm">
          <input type="checkbox" name="acceptTermsCheckbox" className="mx-1" />
          <span>Acepto las </span>
          <a
            href="http://localhost:5173/terms_and_conditions"
            target="_blank"
            className="underline hover:text-indigo-600"
          >
            Condiciones de servicio y Política de privacidad
          </a>
        </div>
        <button type="submit" className={handleButtonClass()}>
          REGISTRARME
        </button>
      </section>
    </form>
  );
}

// Se cambió for por htmlFor en los labels de cada formulario
