
import axios from "axios"
import { useEffect, useState } from "react"

export function ApiUniversity() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    axios.get("http://universities.hipolabs.com/search?country=United+States")
      .then(function(response) {
        setData(response.data);
        setLoading(false)
      })
      .catch(function(error) {
        console.error("ERROR on response!", error)
        setLoading(true)
      })
  }, []);

  if (loading) {
    <p>Loading Bro!</p>
  }

  return (
    <div>
      <h1>Universities</h1>
      <ul>
        {/* {data.map((item) => (
          <li
          key={item.id}>
            {item.name}
          </li>
        ))} */}
      </ul>
    </div>
  );
}