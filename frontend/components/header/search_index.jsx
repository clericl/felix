import React from 'react';
import { search } from '../../actions/search_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SearchIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            query: "",
        };
        this.formatSearchResults = this.formatSearchResults.bind(this);
        this.renderSearchResults = this.renderSearchResults.bind(this);
        this.fillSearch = this.fillSearch.bind(this);
    }

    fillSearch(e, result) {
        this.props.updateInput(result);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.query !== this.props.query && this.props.query) {
            this.props.search(this.props.query);
        }
    }

    formatSearchResults(resultText) {
        let boldTextArray = resultText.split(this.props.query);
        boldTextArray = boldTextArray.map((segment, idx) => {
            if (idx !== 0) {
                return (
                    <div className="search-index-chunk" key={idx}>
                        <p className="search-index-chunk-regular">{this.props.query}</p>
                        <p className="search-index-chunk-bold">{segment}</p>
                    </div>
                )
            } else {
                return (
                    <div className="search-index-chunk" key={idx}>
                        <p className="search-index-chunk-bold">{segment}</p>
                    </div>
                )
            }
        });
        return boldTextArray;
    }

    renderSearchResults() {
        return this.props.results.map((result, index) => {
            return (
                <li key={index} onClick={e => this.fillSearch(e, result)}>
                    <Link to="/search" className="search-index-item">{this.formatSearchResults(result)}</Link>
                </li>
            )
        })
    }

    render() {
        if (this.props.show && this.props.results.length > 0) {
            return (
                <ul className="header-search-index">
                    {this.renderSearchResults()}
                    <li>
                        <Link to="/search" className="search-index-item see-all-results">{`See all results for ${this.props.query}`}</Link>
                    </li>
                </ul>
            )
        } else {
            return null;
        }
    }
}

const msp = (state, ownProps) => {
    const results = Object.values(state.ui.search).map(
            result => result.query
        ).sort(
            (key1, key2) => {
                if (key1.indexOf(ownProps.query) < key2.indexOf(ownProps.query)) {
                    return -1
                } else {
                    return 1
                }
            }
        ).slice(0, 5);

    return {
        // results: Object.keys(state.ui.search).sort(
        //     (key1, key2) => {
        //         if (key1.indexOf(ownProps.query) < key2.indexOf(ownProps.query)) {
        //             return -1
        //         } else {
        //             return 1
        //         }
        //     }
        // ).slice(0, 5),
        results: [...new Set(results)],
    }
}

const mdp = dispatch => {
    return {
        search: query => dispatch(search(query)),
    }
}

export default connect(msp, mdp)(SearchIndex);