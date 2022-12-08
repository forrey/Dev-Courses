import { useEffect, useState } from "react";

function LastSalesPage() {
  const [salesData, setSalesData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://nextjs-5-pre-rendering-default-rtdb.firebaseio.com/sales.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setSalesData(transformedSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!salesData) {
    return <h1>No data yet</h1>;
  }

  return (
    <ul>
      {salesData.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
