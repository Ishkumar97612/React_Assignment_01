// to toggle button...........
const toggleDetails = (showdetails, setdetails, clickCount, setClickCount) => {
    setdetails(!showdetails);
    setClickCount(clickCount + 1);
  };
  export default toggleDetails;