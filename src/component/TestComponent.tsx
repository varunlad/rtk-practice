import { useEffect, useState } from "react";

type MytestComponentProps = {
    name: string;
    optionalProp ?: string;
}

function MytestComponent({ name, optionalProp}: MytestComponentProps) {
    const [testState, setTestState] = useState<string[]>([]);
    useEffect(() => {
        // Simulating an API call or some asynchronous operation
        setTimeout(() => {
            setTestState(["Item 1", "Item 2", "Item 3"]);
        }, 1000); 
    }, []);
    return (
        <div>
            <h1>My Test Component</h1>
            <p>Hello, {name}!</p>
            <p>{optionalProp} </p>
            <ul>
                {testState.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )   
}
        
export default MytestComponent;