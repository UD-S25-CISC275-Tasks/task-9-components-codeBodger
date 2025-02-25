import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): /* React. */ JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    return (
        <div>
            <h2>Start Attempt</h2>
            <h2>Remaning Attempts: {attempts}</h2>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                    setInProgress(true);
                }}
                disabled={inProgress || !attempts}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setInProgress(false);
                }}
                disabled={!inProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}
