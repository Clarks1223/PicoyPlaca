import { useForm } from "react-hook-form";
import { useState } from "react";
import Information from "./InformationPlate";
export const Form = () => {
  const [datosFormulario, setDatosFormulario] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setDatosFormulario(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mainForm">
        <label htmlFor="plate">License plate number:</label>
        <input
          id="plate"
          type="text"
          name="plate"
          placeholder="ABC-1234"
          maxLength="8"
          {...register("plate", {
            required: true,
            pattern: /^[A-Z]{3}-\d{3,4}$/,
          })}
        />
        {errors.plate?.type === "required" && <p>Required</p>}
        {errors.plate?.type === "pattern" && (
          <p>this format is incorrect, EX: PBC-1234</p>
        )}

        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          name="date"
          max={`2023-12-31`}
          min={`2023-01-01`}
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
