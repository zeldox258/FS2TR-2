import { useState } from "react";

const UseJeweler = (initialCount, initialCarats) => {
    const [productCount, setProductCount] = useState(initialCount);
    const [carat, setCarat] = useState(initialCarats);

    function increaseCount() {
        setProductCount(productCount +1);
    }

    function setCaratValue(newCarat) {
        setCarat(newCarat)
    }

    return {
        productCount,
        carat,
        increaseCount,
        setCaratValue,
    }
}

export default UseJeweler