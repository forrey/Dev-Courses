import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
  const [salesData, setSalesData] = useState(props.sales);
  // const [isLoading, setIsLoadcing] = useState(false);

  const { data, error } = useSWR(
    "https://nextjs-5-pre-rendering-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSalesData(transformedSales);
    }
  }, [data]);

  if (!data && !salesData) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Failed to Load</h1>;
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

export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-5-pre-rendering-default-rtdb.firebaseio.com/sales.json"
  );

  const data = await response.json();

  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return { props: { sales: transformedSales }, revalidate: 10 };
}

export default LastSalesPage;
