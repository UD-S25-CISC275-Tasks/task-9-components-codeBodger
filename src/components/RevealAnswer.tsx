import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setValue] = useState<boolean>(false);
    return (
        <div>
            <h2>Reveal Answer</h2>
            <Button
                onClick={() => {
                    setValue(!visible);
                }}
            >
                Reveal Answer
            </Button>
            <p>Answer: {visible ? 42 : ""}</p>
        </div>
    );
}
