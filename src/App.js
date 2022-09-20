import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchDeck } from "./features/Deck/deckSlice";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="tc flex flex-column items-center justify-center">
      <div className="lightest-blue tl">
        <p>
          Currently, clicking "Fetch Cards" multiple times sends multiple
          requests to API.
        </p>
        <p className="b">
          Task 1: Add loading component, so we can only make one request at a
          time.
        </p>
      </div>
      <button
        className="bg-animate bg-blue hover-bg-light-blue inline-flex items-center bw0 ma1 tc navy pv2 ph6 br4 f3"
        onClick={async () => {
          await dispatch(fetchDeck());
          navigate("/deck");
        }}
      >
        Fetch Cards
      </button>
      <p className="i f6 light-blue">
        Note: extra credit will be given for refactoring/suggestions done
        throughout.
      </p>
    </div>
  );
};

export default App;
