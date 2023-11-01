import { useState } from "react";

const useUser = (initialValues) => {
  const [age, setAge] = useState(initialValues.age);
  const [height, setHeight] = useState(initialValues.height);
  const [weight, setWeight] = useState(initialValues.weight);

    function increaseHeight(amount) {
        setHeight(prevHeight => prevHeight + amount)
    }
    function decreaseHeight(amount) {
        setHeight(prevHeight => prevHeight - amount)
    }
    function increaseWeight(amount) {
        setWeight(prevWeight => prevWeight + amount)
    }
    function decreaseWeight(amount) {
        setWeight(prevWeight => prevWeight - amount)
    }

  return {
    age,
    weight,
    height,
    increaseHeight,
    decreaseHeight,
    increaseWeight,
    decreaseWeight
  };
};

export default useUser;
