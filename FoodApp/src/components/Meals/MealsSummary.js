import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food Delivered to you!!</h2>
      <p>
        Choose your favourite meal from our brand section of available meals and
        enjoy a delicious lunch or dinner at home!
      </p>
      <p>
        All our meals are cooked with high quality ingredients, just in time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
