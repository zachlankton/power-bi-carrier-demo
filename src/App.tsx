import powerbi from "powerbi-visuals-api";
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import * as React from "react";
import TableRow from "./TableRow";

function bySummaryIndex(a: any, b: any) {
    return sortByIndex(a, b, "summary");
}
function byDetailsIndex(a: any, b: any) {
    return sortByIndex(a, b, "details");
}
function sortByIndex(a: any, b: any, indexName: string) {
    if (a.rolesIndex[indexName][0] > b.rolesIndex[indexName][0]) return 1;
    if (a.rolesIndex[indexName][0] < b.rolesIndex[indexName][0]) return -1;
    return 0;
}

export default function App(props: any) {
    if (props === undefined) return <></>;

    const options = props.options as VisualUpdateOptions;
    let summaryCols = [];
    let detailCols = [];
    let rows = [];

    if (options.dataViews && options.dataViews[0]) {
        const table = options.dataViews[0].table;
        rows = table.rows.map((row) => {
            const obj = {};
            table.identityFields.map((id: any, idx) => {
                obj[id.ref] = row[idx];
            });
            return obj;
        });
        summaryCols = table.columns.filter((col) => col.roles.summary);
        detailCols = table.columns.filter((col) => col.roles.details);
        summaryCols.sort(bySummaryIndex);
        detailCols.sort(byDetailsIndex);
    }

    return (
        <div id="wrapper">
            <table>
                <thead>
                    <tr>
                        {summaryCols.map((col) => (
                            <th>{col.displayName}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <TableRow
                            summaryCols={summaryCols}
                            detailCols={detailCols}
                            row={row}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
