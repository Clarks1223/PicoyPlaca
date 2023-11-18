const Information = ({ formData }) => {
  if (!formData || !formData.plate || !formData.date || !formData.time) {
    return <p>Los datos del formulario no están definidos.</p>;
  }

  const number = formData.plate.substring(formData.plate.length - 1);
  const dia = new Date(formData.date).getDay();
  const hour = new time(formData.time).getHour();
  var road = true;

  switch (number) {
    case "1":
    case "2":
      dia == 0 ? (road = false) : (road = true);
      break;
    case "3":
    case "4":
      dia == 1 ? (road = false) : (road = true);
      break;
    case "5":
    case "6":
      dia == 2 ? (road = false) : (road = true);
      break;
    case "7":
    case "8":
      dia == 3 ? (road = false) : (road = true);
      break;
    case "9":
      dia == 4 ? (road = false) : (road = true);
      break;
    case "0":
      dia == 4 ? (road = false) : (road = true);
      break;
  }

  return (
    <>
      <section>
        <h3>License plate number: {formData.plate}</h3>
        <h3>Date: {formData.date}</h3>
        <h3>Time: {formData.time}</h3>
        <h3>Last digit of plate: {number}</h3>
        <h3>dia: {dia}</h3>
        <p>{road ? "You are able to road" : "Be careful, you can not road"}</p>
      </section>
    </>
  );
};
export default Information;
