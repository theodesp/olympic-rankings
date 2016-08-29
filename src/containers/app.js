import "babel-polyfill";
import React from "react";
import {RankingsTable} from "../components/rankings-table";
import {Ranking} from "../models/ranking";
import {MetalsCounter} from "../utils/metals-counter";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rankings: null
        }
    }

    componentDidMount() {
        this.request = this.props.api.fetchData(this.props.dataUrl).then((data) => {
            this.setState({
                rankings: this.getRankings(data.map(entry => new Ranking(entry)))
            })
        })
    }

    componentWillUnmount() {
        this.request.reject();
    }

    getRankings(rankingsData) {
        const rankingsMap = new Map();

        rankingsData.forEach((entry, idx) => {
            if(rankingsMap.has(entry.country)) {
                rankingsMap.get(entry.country).update(entry.medal);
            } else {
                rankingsMap.set(entry.country, new MetalsCounter());
            }
        });

        return rankingsMap;
    }

    render() {
        return (
            <div>
                <h1>Beijing 2008 Olympic Rankings</h1>
                <button>Load rankings</button>
                <section>
                    { this.state.rankings && <RankingsTable rankings={this.state.rankings} /> }
                </section>
            </div>
        )
    };
}