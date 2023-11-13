import React from "react";
import { withRouter } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";

class Restaurant extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      restaurant: null,
    };
  }

  componentDidMount() {
    const host = process.env.REACT_APP_BACKEND_HOST;
    console.log({ match: this.props.match, history: this.props.history });

    const id = this.props.match.params.id;

    fetch(`${host}/restaurants/${id}.json`)
      .then((result) => result.json())
      .then((restaurant) => {
        this.setState({
          restaurant: {
            ...restaurant,
            imageSrc: `${host}${restaurant.imageSrc}`,
          },
          loading: false,
        });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    if (this.state.loading) {
      return "Loading";
    }
    if (this.state.error) {
      return "Sorry, but that restaurant is currently unavailable.";
    }

    return <RestaurantDetails restaurant={this.state.restaurant} />;
  }
}

export default withRouter(Restaurant);
