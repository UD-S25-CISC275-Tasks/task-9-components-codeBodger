import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidaysByYear = [
    "רֹאשׁ הַשָּׁנָה",
    "סֻכּוֹת",
    "שִׂמְחַת תּוֹרָה",
    "Weihnachtsabend",
    "פֶּסַח"
]; /* as const */
type Holiday = typeof holidaysByYear[number];

const holidayEmogis = ["🍯", "🛖", "📜", "🍪", "👪"];

const holidays2emoji: Record<Holiday, string> = Object.assign(
    {},
    ...holidaysByYear.map((v, i) => ({ [v]: holidayEmogis[i] }))
) as Record<Holiday, string>;

function nextByYear(current: Holiday): Holiday {
    return holidaysByYear[
        (holidaysByYear.findIndex((v) => v === current) + 1) %
            holidaysByYear.length
    ];
}

function toSorted<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
    const arrCp = [...arr];
    arrCp.sort(compareFn);
    return arrCp;
}

function nextByAlph(current: Holiday): Holiday {
    const holidaysByAlph = toSorted(holidaysByYear) as Holiday[];
    return holidaysByAlph[
        (holidaysByAlph.findIndex((v) => v === current) + 1) %
            holidaysByAlph.length
    ];
}

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("רֹאשׁ הַשָּׁנָה");

    return (
        <div>
            <h2>Cycle Holiday</h2>
            <Button
                onClick={() => {
                    setHoliday(nextByAlph(holiday));
                }}
            >
                Next Alphabetic
            </Button>
            <Button
                onClick={() => {
                    setHoliday(nextByYear(holiday));
                }}
            >
                Next Yearly
            </Button>
            <h2>Holiday: {holidays2emoji[holiday]}</h2>
        </div>
    );
}
