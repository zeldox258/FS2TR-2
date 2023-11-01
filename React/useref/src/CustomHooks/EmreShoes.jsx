import react,{useState} from "react"

const EmreShoes = (initialValues) => {
    const [shoesNumber, setShoesNumber] = useState()
    const [shoesGender, setShoesGender] = useState()

    function StockShoesNumber(e) {
        const { name, shoesNumber } = e.target;
        setShoesNumber({ ...shoesNumber, [name]: shoesNumber });
    }
    function StockShoesGender(e) {
        const { name, shoesGender } = e.target;
        setShoesGender({ ...shoesGender, [name]: shoesGender })
    }
    function resetStock() {
        setShoesNumber(initialValues);
        setShoesGender(initialValues);
      }
    return {
        shoesNumber,
        shoesGender,
        StockShoesNumber,
        StockShoesGender,
        resetStock,
    };
}


export default EmreShoes;