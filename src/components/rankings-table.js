import React from "react";

export const RankingsTable = (rankings) => {
    var rows = [];

    rankings.rankings.forEach((ranking, country) => {
        rows.push(<RankingsRow country={country}
                               metalsCount={ranking.metalsCount}
                               key={country}/>);
    });

    return (
        <table>
            <thead>
            <tr>
                <th>Country</th>
                <th>Total Metals Won</th>
                <th>Total Gold</th>
                <th>Total Silver</th>
                <th>Total Bronze</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};

const RankingsRow = (country, metalsCount) => {
    return (
        <tr>
            <td>{country}</td>
            <td>{metalsCount.totals}</td>
            <td>{metalsCount.goldCount}</td>
            <td>{metalsCount.silverCount}</td>
            <td>{metalsCount.bronzeCount}</td>
        </tr>
    )
};
