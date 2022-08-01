import * as React from "react";

export interface CardState {
    textLabel: string;
    textValue: string;
}

export function CircleCard({ textLabel, textValue }: CardState) {
    return (
        <div className="circleCard">
            <p>
                {textLabel}
                <br />
                <em>{textValue}</em>
            </p>
        </div>
    );
}

// export class ReactCircleCard extends React.Component<{}> {
//     render() {
//         return <div className="circleCard">Hello, React!</div>;
//     }
// }

// export default ReactCircleCard;
