import React from "react";

export const RankingsTable = (rankings) => {
    const sorted = new Map([...rankings.rankings.entries()].sort((a,b) => {
        return a[1].totals < b[1].totals ? 1 : a[1].totals > b[1].totals ? -1 : 0
    }));

    return (
        <table className="striped centered">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Total Medals Won</th>
                    <th>Total Gold</th>
                    <th>Total Silver</th>
                    <th>Total Bronze</th>
                </tr>
            </thead>
            <tbody>
                {
                    Array.from(sorted).map(([key, value]) => {
                        return (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{value.totals}</td>
                                <td>{value.goldCount}</td>
                                <td>{value.silverCount}</td>
                                <td>{value.bronzeCount}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};
