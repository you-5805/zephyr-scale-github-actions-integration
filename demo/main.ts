import { zephyr } from './lib/client';

const main = async () => {
  const testCaseList = await zephyr.testcases.$get({
    query: {
      projectKey: 'MAIN',
    },
  });

  if (!testCaseList.values) return;

  for (const testCase of testCaseList.values) {
    console.log(testCase.folder);
  }
};

main();
