import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../redux/cake/cakeReducer";

function CakeContainer() {
  const count = useSelector((state) => state.counter.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes - {count}</h2>
      <button onClick={() => dispatch(decrement())}>Buy Cake</button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     numberOfCakes: state.numberOfCakes,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyCake: () => dispatch(buyCake()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
export default CakeContainer;
