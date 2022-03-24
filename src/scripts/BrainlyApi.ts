class BrainlyApi {
    private graphqlURL = `https://brainly.com/graphql/us`;
    private legacyApiURL = `https://brainly.com/api/28`;
  
    private async LegacyApiReq(
      method: "GET" | "POST",
      apiMethod: string,
      body?
    ) {
      const res = await fetch(`${this.legacyApiURL}/${apiMethod}`, {
        method,
        body: method === "GET" ? null : JSON.stringify(body)
      }).then(data => data.json());
  
      if (!res.success) throw Error(res.message);
  
      return res.data;
    }
  
    public async GQL(
      query: string, 
      variables?: unknown
    ) {
      return await fetch(this.graphqlURL, {
        method: "POST",
        body: JSON.stringify({ query, variables }),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      }).then(data => data.json());
    }
}
  
export default new BrainlyApi();