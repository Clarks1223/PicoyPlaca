const Information = ({formData}) => {

  if (!formData || !formData.plate || !formData.date || !formData.time) {
    return <p>Los datos del formulario no están definidos.</p>;
  }

  const letra = formData.plate.substring(formData.plate.length - 1);
  const dia = new Date(formData.date).getDay();
  const road = true;

  return (
    <>
      <section>
        <h3>License plate number: {formData.plate}</h3>
        <h3>Date: {formData.date}</h3>
        <h3>Time: {formData.time}</h3>
        <h3>letra: {letra}</h3>
        <h3>dia: {dia}</h3>
        <p>{road ? "Be careful, you can not road" : "You are able to road"}</p>
      </section>
    </>
  );
}
export default Information;
