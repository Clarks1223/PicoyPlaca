import { useForm } from "react-hook-form";
import { useState } from "react";
import Information from "./InformationPlate";
export const Form = () => {
  const [datosFormulario, setDatosFormulario] = useState(null);
  //Desctructuring values
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //to submit the form
  const onSubmit = (data) => {
    setDatosFormulario(data);
  };
  //for capital letters
  const handlePlateChange = (e) => {
    e.target.value = e.target.value.toUpperCase();
  };

  //get courrent year
  const year = new Date().getFullYear();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mainForm">
        <label htmlFor="plate">License plate number:</label>
        <input
          id="plate"
          type="text"
          name="plate"
          placeholder="ABC-0123"
          maxLength="8"
          {...register("plate", {
            required: true,
            pattern: /^[A-Z]{3}-\d{3,4}$/,
          })}
          onChange={handlePlateChange}
        />
        {errors.plate?.type === "required" && <p>Required</p>}
        {errors.plate?.type === "pattern" && (
          <p>This format is incorrect, EX: PBC-1234</p>
        )}
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          name="date"
          max={`${year}-12-31`}
          min={`${year}-01-01`}
          {...register("date", {
            required: true,
          })}
        />
        {errors.date?.type === "required" && <p>Required</p>}
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="time"
          name="time"
          {...register("time", {
            required: true,
          })}
        />
        {errors.time?.type === "required" && <p>Required</p>}
        <input type="submit" value="Search" />
      </form>

      {datosFormulario && <Information formData={datosFormulario} />}
    </>
  );
};
export default Form;
