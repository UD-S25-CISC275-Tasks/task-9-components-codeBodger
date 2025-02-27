import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [lDie, setLDie] = useState<number>(2);
    const [rDie, setRDie] = useState<number>(4);

    return (
        <div>
            <h2>Two Dice</h2>
            <span data-testid="left-die">{lDie}</span>
            <span data-testid="right-die">{rDie}</span>
            <Button onClick={() => setLDie(d6())}>Roll Left</Button>
            <Button onClick={() => setRDie(d6())}>Roll Right</Button>
            <h2>{lDie === rDie ? (lDie === 1 ? "Lose" : "Win") : ""}</h2>
        </div>
    );
}
