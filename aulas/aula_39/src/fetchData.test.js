const fetchData = require("./fetchData");

test("retorna dados após 2 segundos", async () => {
  const data = await fetchData();
  expect(data).toBe("dados recebidos");
});