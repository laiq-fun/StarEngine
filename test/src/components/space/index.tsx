import {Build} from "../../star-engine";
import {useEffect, useRef, useState} from "react";

function Space() {
    const Space = new Build();
    const spaceDom = useRef<HTMLDivElement>(null);
    const [isRender,setRender] = useState(false);
    useEffect(() => {
        if (!isRender) {
            spaceDom.current.append(Space.domElement);
            setRender(true);
        }
    })
    return (
        <div ref={spaceDom}>Space</div>
    )
}

export default Space