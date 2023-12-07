import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import AppHeader from "./AppHeader";
import About from "./About";

import * as browse from "browse";
// import * as restaurant from "restaurant";

// const MarkdownPreview1 = browse.App;
// const MarkdownPreview2 = restaurant.App;

let numRestaurants = 0;

const MarkdownPreview1 = React.lazy(() =>
  browse.then((module) => ({ default: module.App }))
);
// const MarkdownPreview2 = React.lazy(() =>
//   import("restaurant").then((module) => ({ default: module.App }))
// );
fetch(`${process.env.REACT_APP_BACKEND_HOST}/restaurants.json`)
  .then((res) => res.json())
  .then((restaurants) => {
    numRestaurants = restaurants.length;
  });
const getRandomRestaurantId = () =>
  Math.floor(Math.random() * numRestaurants) + 1;

const Random = () => <Redirect to={`/restaurant/${getRandomRestaurantId()}`} />;

// const Restaurant = ({ history }) => {
//   console.log("HOST", { history });

//   return <restaurant.App history={history} />;
// };

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route
          exact
          path="/restaurant/:id"
          render={() => (
            <React.Suspense fallback={<div>Loading</div>}>
              {/* <MarkdownPreview2 /> */}
            </React.Suspense>
          )}
        />
        <Route
          exact
          path="/test"
          render={() => (
            <React.Suspense fallback={<div>Loading</div>}>
              {/* <MarkdownPreview2 /> */}
            </React.Suspense>
          )}
        />
        <Route exact path="/random" component={Random} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/"
          render={() => (
            <React.Suspense fallback={<div>Loading</div>}>
              <MarkdownPreview1 />
            </React.Suspense>
          )}
        />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
