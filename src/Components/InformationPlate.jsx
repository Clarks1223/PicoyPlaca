import "../Stylesheet/InformationStyles.css";
const Information = ({ formData }) => {

  // Get the last digit of the plate
  const numberPlate = formData.plate.substring(formData.plate.length - 1);

  const canRoad = () => {
    // Get weekday
    const day = new Date(formData.date).getDay();

    // Get hours and minutes
    const [hour, minutes] = formData.time
      .split(":")
      .map((item) => Number(item));

    // Condition for circulation time
    const validTime =
      (hour >= 7 && hour < 9) ||
      (hour == 9 && minutes < 30) ||
      (hour >= 16 && hour < 19)||
      (hour == 19 && minutes<30);

    switch (day) {
      case 0:
        return (numberPlate == "1" || numberPlate == "2") && validTime;
      case 1:
        return (numberPlate == "3" || numberPlate == "4") && validTime;
      case 2:
        return (numberPlate == "5" || numberPlate == "6") && validTime;
      case 3:
        return (numberPlate == "7" || numberPlate == "8") && validTime;
      case 4:
        return (numberPlate == "9" || numberPlate == "0") && validTime;
      case 5:
      case 6:
        return false;
    }
  };

  const weekdayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const weekDay = weekdayNames[new Date(formData.date).getDay()];

  return (
    <>
      <section className="Information">
        <h3>License plate number: {formData.plate}</h3>
        <h3>Date: {formData.date}</h3>
        <h3>Time: {formData.time}</h3>
        <h3>Last digit of plate: {numberPlate}</h3>
        <h3>Day: {weekDay}</h3>
          <h4>
            {canRoad()
              ? "Be careful, you cannot road at this moment."
              : "You're ready to hit the road. Wishing you an incredible journey!"}
          </h4>
          <h4>
            {weekDay == "Saturday" || weekDay == "Sunday"
              ? "Remember that the PICO y PLACA doesn't work on the weekend"
              : "Schedule: 7:00 to 9:30 and 16:00 to 19:30"}
          </h4>
      </section>
    </>
  );
};

export default Information;
