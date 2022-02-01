import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import LoginFormPage from "./components/auth/LoginFormPage";
import ContentWrap from "./components/ContentWrap";
import { authenticate } from "./store/session";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      {loaded && (
        < BrowserRouter >
          <Provider store={loaded}>
          <ContentWrap>
            <Switch>
              <Route path="/login" exact={true}>
                <LoginFormPage />
              </Route>
            </Switch>
            </ContentWrap>
          </Provider>
        </BrowserRouter >
      )
      }
    </>
  );
}

export default App;
