type Tools = {
    Count: number,
    Colour: string,
    isRight: boolean
};
type AFew = {
    isGoing: boolean
};



const Suleyman = () => {

    const thing: Tools & AFew = {
        Count: 3,
        Colour: "Red",
        isRight: false,
        isGoing: false
    }

    return (
        <>
            <p>{"SULEYMAN" thing.Count}</p>
            <p>{"SULEYMAN" thing.Colour}</p>
        </>
    )
}

export default Suleyman