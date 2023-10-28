
  
  // Wrapping the code in an async function
  async function fetchDataAndProcess() {
    try {
      const apiData = await fetchDataFromAPI('https://example.com/api/data');
      const processedData = await processData(apiData);
      console.log('Processed data:', processedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Calling the async function
  fetchDataAndProcess();
  