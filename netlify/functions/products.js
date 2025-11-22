export const handler = async () => {
  try {
    
    const res = await fetch(
      "https://fakestoreapi.com/products",
      { headers: { "Accept": "application/json" } }
    );

    if (!res.ok) {
      throw new Error(`Fakestore API returned status ${res.status}`);
    }

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };
  } catch (error) {
    console.error("Error fetching from Fakestore API:", error);

   
    try {
      const proxyRes = await fetch(
        "https://api.allorigins.win/raw?url=https://fakestoreapi.com/products",
        { headers: { "Accept": "application/json" } }
      );

      if (!proxyRes.ok) {
        throw new Error(`Proxy returned status ${proxyRes.status}`);
      }

      const proxyData = await proxyRes.json();

      return {
        statusCode: 200,
        body: JSON.stringify(proxyData),
        headers: { "Content-Type": "application/json" },
      };
    } catch (proxyError) {
      console.error("Error fetching from proxy:", proxyError);

      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to fetch products in production" }),
      };
    }
  }
};
