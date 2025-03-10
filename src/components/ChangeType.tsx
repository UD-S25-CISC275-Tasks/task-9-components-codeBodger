import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    return (
        <div>
            <h2>Change Type</h2>
            <Button
                onClick={() => {
                    setType(
                        type === "multiple_choice_question"
                            ? "short_answer_question"
                            : "multiple_choice_question"
                    );
                }}
            >
                Change Type
            </Button>
            <h2>
                {type === "multiple_choice_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </h2>
        </div>
    );
}
