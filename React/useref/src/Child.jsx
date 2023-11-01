import React, {useRef} from "react";


const Child = React.forwardRef((props, ref) => {

    function printSuleyman(){
        console.log("Suleyman");
    }

    const PI = 3.14;


    React.useImperativeHandle(ref, () => ({
        printSuleyman,PI
    }))

    return (
        <div>
            Child component
        </div>
    )

})


export default Child;