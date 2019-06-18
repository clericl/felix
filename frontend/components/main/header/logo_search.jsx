import React from 'react';
import SearchIndex from './search_index';
import { Link, Redirect } from 'react-router-dom';
import { FaSearch, FaFacebookSquare } from 'react-icons/fa';

class LogoSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            query: "",
            fireRedirect: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleIconClick = this.handleIconClick.bind(this);
        this.updateStateQuery = this.updateStateQuery.bind(this);
    }

    handleChange(e) {
        this.setState({
            query: e.target.value,
        });
    }

    updateStateQuery(val) {
        this.setState({
            query: val,
        });
    }

    handleIconClick(e) {
        if (this.state.show) {
            this.setState({
                show: false,
                fireRedirect: true,
            });
        } else {
            this.setState({
                show: true,
            });
        }
    }
    
    componentDidUpdate() {
        if (this.state.fireRedirect) {
            this.setState({
                fireRedirect: false,
            });
        }
    }

    render() {
        if (this.state.fireRedirect) {
            return (
                <Redirect to="/search" />
            )
        } else {
            return (
                <div className="logo-search">
                    <Link to="/" className="header-logo-box" >
                        <FaFacebookSquare className="header-logo-icon" />
                    </Link>
                    <input
                        type="text"
                        className="header-search"
                        value={this.state.query}
                        onChange={this.handleChange}
                        onFocus={e => this.setState({ show: true })}
                        onBlur={e => setTimeout(() => this.setState({ show: false }), 200)}
                        onKeyPress={e => {
                            if (e.key == "Enter") {
                                this.handleIconClick();
                            }
                        }}
                    />
                    <div
                        className={`header-search-icon ${this.state.show ? "icon-active" : ""}`}
                        onClick={this.handleIconClick}
                    >
                        <FaSearch />
                    </div>
                    <SearchIndex query={this.state.query} show={this.state.show} updateInput={this.updateStateQuery} />
                </div>
            )
        }
    }
}

export default LogoSearch;