// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

type State = {
  searchTerm: string
};

type Props = {
  preload: Array<Show>
};

class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      searchTerm: ' '
    };

    // this.handleSearchTerm = this.handleSearchTerm.bind(this);
  }



  handleSearchTerm = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.currentTarget.value });
    // console.log(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search">
        <Header searchInput handleSearchTerm={this.handleSearchTerm} />

        {/* preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />) */}
        <div>
          {this.props.preload
            .filter(
              show =>
                `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
