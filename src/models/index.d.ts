import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TestTypeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestUnitMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestUnitTestResultMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestResultMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestUploadMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ThresholdMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TestType {
  readonly id: string;
  readonly typeName: string;
  readonly description?: string | null;
  readonly testUnitID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TestType, TestTypeMetaData>);
  static copyOf(source: TestType, mutator: (draft: MutableModel<TestType, TestTypeMetaData>) => MutableModel<TestType, TestTypeMetaData> | void): TestType;
}

export declare class TestUnit {
  readonly id: string;
  readonly unitName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TestUnit, TestUnitMetaData>);
  static copyOf(source: TestUnit, mutator: (draft: MutableModel<TestUnit, TestUnitMetaData>) => MutableModel<TestUnit, TestUnitMetaData> | void): TestUnit;
}

export declare class TestUnitTestResult {
  readonly id: string;
  readonly testUnitID: string;
  readonly testResultID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TestUnitTestResult, TestUnitTestResultMetaData>);
  static copyOf(source: TestUnitTestResult, mutator: (draft: MutableModel<TestUnitTestResult, TestUnitTestResultMetaData>) => MutableModel<TestUnitTestResult, TestUnitTestResultMetaData> | void): TestUnitTestResult;
}

export declare class TestResult {
  readonly id: string;
  readonly testID: string;
  readonly testDate: string;
  readonly completedDate: string;
  readonly typeID: string;
  readonly schoolYear: number;
  readonly nationalBand?: string | null;
  readonly minStandard?: string | null;
  readonly level?: string | null;
  readonly testUploadID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TestResult, TestResultMetaData>);
  static copyOf(source: TestResult, mutator: (draft: MutableModel<TestResult, TestResultMetaData>) => MutableModel<TestResult, TestResultMetaData> | void): TestResult;
}

export declare class Test {
  readonly id: string;
  readonly dataType: string;
  readonly typeID: string;
  readonly testName: string;
  readonly year?: number | null;
  readonly nationalMean?: number | null;
  readonly isRandomOrder?: boolean | null;
  readonly isSortedByComplexity?: boolean | null;
  readonly testUnitID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Test, TestMetaData>);
  static copyOf(source: Test, mutator: (draft: MutableModel<Test, TestMetaData>) => MutableModel<Test, TestMetaData> | void): Test;
}

export declare class TestUpload {
  readonly id: string;
  readonly testDate: string;
  readonly testID: string;
  readonly typeID: string;
  readonly schoolYear: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TestUpload, TestUploadMetaData>);
  static copyOf(source: TestUpload, mutator: (draft: MutableModel<TestUpload, TestUploadMetaData>) => MutableModel<TestUpload, TestUploadMetaData> | void): TestUpload;
}

export declare class Threshold {
  readonly id: string;
  readonly testID: string;
  readonly scaledBottom: string;
  readonly scaledTop: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Threshold, ThresholdMetaData>);
  static copyOf(source: Threshold, mutator: (draft: MutableModel<Threshold, ThresholdMetaData>) => MutableModel<Threshold, ThresholdMetaData> | void): Threshold;
}