module.exports = {
    resolve: {
      fallback: {
        "assert": require.resolve("assert/"),
        "http": require.resolve("stream-http")
      }
    }
  };
  