// import React, { useEffect, useState } from "react";


// const TestData = () => {
//     const [data, setData] = useState(null);
    
//     useEffect(() => {
//         fetch("/trades")
//           .then((res) => res.json())
//           .then(actualData => console.log(actualData))
//           .catch((err) => {
//             console.log(err)
//           })
//       }, []);


//       return (
//         <div>
//             {!data ? "Loading..." : data}
//         </div>
//       )

// }

// const dataSample = fetch("/trades").then(res => res.json()).then(data => console.log(data.trades))

// export default dataSample

// export default TestData





// const [data, setData] = React.useState(null);
	
// React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);