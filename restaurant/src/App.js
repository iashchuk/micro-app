import React from "react";
import { Router, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import { createBrowserHistory } from "history";
import Restaurant from "./Restaurant";

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 20px;
`;

const defaultHistory = createBrowserHistory();

const App = ({ history = defaultHistory }) => {
  console.log("RESTAURANT", { history });

  const location = useLocation();

  return <Restaurant  />;

  // return (
  //   <Router history={history}>
  //     <MainColumn>
  //       <Route path="/restaurant/:id" component={Restaurant} />
  //       <Route path="/test" component={Restaurant} />
  //     </MainColumn>
  //   </Router>
  // );
};

export default App;
