export function Information({ form }) {
  var letra = form.plate;
  letra = letra.substring(letra.length - 1, letra.length);

  var dia=new Date(form.date)
  dia=dia.getDay()
  
  return (
    <>
      <button className="closeSection">x</button>
      <section>
        <h3>License Plate Number: {form.plate}</h3>
        <h3>Date: {form.date}</h3>
        <h3>Time: {form.time}</h3>
        <h3>letra: {letra}</h3>
        <h3>dia: {dia}</h3>
        <p>Message</p>
      </section>
    </>
  );
}
export default Information;
