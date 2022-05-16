// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TestType, TestUnit, TestUnitTestResult, TestResult, Test, TestUpload, Threshold } = initSchema(schema);

export {
  TestType,
  TestUnit,
  TestUnitTestResult,
  TestResult,
  Test,
  TestUpload,
  Threshold
};