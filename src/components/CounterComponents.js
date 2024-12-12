import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store";

const CounterComponent = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {counter}</h1>
      <div>
        <button
          onClick={() => dispatch(increment())}
          style={{
            padding: "5px 15px",  // Adjust padding for a better look
            margin: "10px",
            fontSize: "14px",      // Smaller font size
            borderRadius: "5px",   // Rounded corners
            cursor: "pointer",     // Pointer cursor on hover
            backgroundColor: "#4CAF50", // Green background
            color: "white",        // White text color
            border: "none",        // Remove border
            transition: "background-color 0.3s ease",  // Smooth hover effect
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#45a049"} // Darker green on hover
          onMouseOut={(e) => e.target.style.backgroundColor = "#4CAF50"} // Reset to original color
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          style={{
            padding: "5px 15px",  // Adjust padding for a better look
            margin: "10px",
            fontSize: "14px",      // Smaller font size
            borderRadius: "5px",   // Rounded corners
            cursor: "pointer",     // Pointer cursor on hover
            backgroundColor: "#f44336", // Red background
            color: "white",        // White text color
            border: "none",        // Remove border
            transition: "background-color 0.3s ease",  // Smooth hover effect
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#e53935"} // Darker red on hover
          onMouseOut={(e) => e.target.style.backgroundColor = "#f44336"} // Reset to original color
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          style={{
            padding: "5px 15px",  // Adjust padding for a better look
            margin: "10px",
            fontSize: "14px",      // Smaller font size
            borderRadius: "5px",   // Rounded corners
            cursor: "pointer",     // Pointer cursor on hover
            backgroundColor: "#2196F3", // Blue background
            color: "white",        // White text color
            border: "none",        // Remove border
            transition: "background-color 0.3s ease",  // Smooth hover effect
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#1976D2"} // Darker blue on hover
          onMouseOut={(e) => e.target.style.backgroundColor = "#2196F3"} // Reset to original color
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
