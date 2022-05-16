/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTestUnitTestResult = /* GraphQL */ `
  mutation CreateTestUnitTestResult(
    $input: CreateTestUnitTestResultInput!
    $condition: ModelTestUnitTestResultConditionInput
  ) {
    createTestUnitTestResult(input: $input, condition: $condition) {
      id
      testUnitID
      testResultID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testUnit {
        id
        unitName
        testUnitTestResults {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      testResult {
        id
        testID
        testDate
        completedDate
        typeID
        schoolYear
        nationalBand
        minStandard
        level
        testUploadID
        testUnitTestResults {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        test {
          id
          dataType
          typeID
          testName
          year
          nationalMean
          isRandomOrder
          isSortedByComplexity
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUpload {
          id
          testDate
          testID
          typeID
          schoolYear
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const updateTestUnitTestResult = /* GraphQL */ `
  mutation UpdateTestUnitTestResult(
    $input: UpdateTestUnitTestResultInput!
    $condition: ModelTestUnitTestResultConditionInput
  ) {
    updateTestUnitTestResult(input: $input, condition: $condition) {
      id
      testUnitID
      testResultID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testUnit {
        id
        unitName
        testUnitTestResults {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      testResult {
        id
        testID
        testDate
        completedDate
        typeID
        schoolYear
        nationalBand
        minStandard
        level
        testUploadID
        testUnitTestResults {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        test {
          id
          dataType
          typeID
          testName
          year
          nationalMean
          isRandomOrder
          isSortedByComplexity
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUpload {
          id
          testDate
          testID
          typeID
          schoolYear
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const deleteTestUnitTestResult = /* GraphQL */ `
  mutation DeleteTestUnitTestResult(
    $input: DeleteTestUnitTestResultInput!
    $condition: ModelTestUnitTestResultConditionInput
  ) {
    deleteTestUnitTestResult(input: $input, condition: $condition) {
      id
      testUnitID
      testResultID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testUnit {
        id
        unitName
        testUnitTestResults {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      testResult {
        id
        testID
        testDate
        completedDate
        typeID
        schoolYear
        nationalBand
        minStandard
        level
        testUploadID
        testUnitTestResults {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        test {
          id
          dataType
          typeID
          testName
          year
          nationalMean
          isRandomOrder
          isSortedByComplexity
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUpload {
          id
          testDate
          testID
          typeID
          schoolYear
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const createThreshold = /* GraphQL */ `
  mutation CreateThreshold(
    $input: CreateThresholdInput!
    $condition: ModelThresholdConditionInput
  ) {
    createThreshold(input: $input, condition: $condition) {
      id
      testID
      scaledBottom
      scaledTop
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      test {
        id
        dataType
        typeID
        testName
        year
        nationalMean
        isRandomOrder
        isSortedByComplexity
        testUnitID
        thresholds {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUploads {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateThreshold = /* GraphQL */ `
  mutation UpdateThreshold(
    $input: UpdateThresholdInput!
    $condition: ModelThresholdConditionInput
  ) {
    updateThreshold(input: $input, condition: $condition) {
      id
      testID
      scaledBottom
      scaledTop
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      test {
        id
        dataType
        typeID
        testName
        year
        nationalMean
        isRandomOrder
        isSortedByComplexity
        testUnitID
        thresholds {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUploads {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteThreshold = /* GraphQL */ `
  mutation DeleteThreshold(
    $input: DeleteThresholdInput!
    $condition: ModelThresholdConditionInput
  ) {
    deleteThreshold(input: $input, condition: $condition) {
      id
      testID
      scaledBottom
      scaledTop
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      test {
        id
        dataType
        typeID
        testName
        year
        nationalMean
        isRandomOrder
        isSortedByComplexity
        testUnitID
        thresholds {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUploads {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createTestType = /* GraphQL */ `
  mutation CreateTestType(
    $input: CreateTestTypeInput!
    $condition: ModelTestTypeConditionInput
  ) {
    createTestType(input: $input, condition: $condition) {
      id
      typeName
      description
      testUnitID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testUnit {
        id
        unitName
        testUnitTestResults {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateTestType = /* GraphQL */ `
  mutation UpdateTestType(
    $input: UpdateTestTypeInput!
    $condition: ModelTestTypeConditionInput
  ) {
    updateTestType(input: $input, condition: $condition) {
      id
      typeName
      description
      testUnitID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testUnit {
        id
        unitName
        testUnitTestResults {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteTestType = /* GraphQL */ `
  mutation DeleteTestType(
    $input: DeleteTestTypeInput!
    $condition: ModelTestTypeConditionInput
  ) {
    deleteTestType(input: $input, condition: $condition) {
      id
      typeName
      description
      testUnitID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testUnit {
        id
        unitName
        testUnitTestResults {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const createTestUnit = /* GraphQL */ `
  mutation CreateTestUnit(
    $input: CreateTestUnitInput!
    $condition: ModelTestUnitConditionInput
  ) {
    createTestUnit(input: $input, condition: $condition) {
      id
      unitName
      testUnitTestResults {
        items {
          id
          testUnitID
          testResultID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTestUnit = /* GraphQL */ `
  mutation UpdateTestUnit(
    $input: UpdateTestUnitInput!
    $condition: ModelTestUnitConditionInput
  ) {
    updateTestUnit(input: $input, condition: $condition) {
      id
      unitName
      testUnitTestResults {
        items {
          id
          testUnitID
          testResultID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTestUnit = /* GraphQL */ `
  mutation DeleteTestUnit(
    $input: DeleteTestUnitInput!
    $condition: ModelTestUnitConditionInput
  ) {
    deleteTestUnit(input: $input, condition: $condition) {
      id
      unitName
      testUnitTestResults {
        items {
          id
          testUnitID
          testResultID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createTest = /* GraphQL */ `
  mutation CreateTest(
    $input: CreateTestInput!
    $condition: ModelTestConditionInput
  ) {
    createTest(input: $input, condition: $condition) {
      id
      dataType
      typeID
      testName
      year
      nationalMean
      isRandomOrder
      isSortedByComplexity
      testUnitID
      thresholds {
        items {
          id
          testID
          scaledBottom
          scaledTop
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testType {
        id
        typeName
        description
        testUnitID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      testUnit {
        id
        unitName
        testUnitTestResults {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      testUploads {
        items {
          id
          testDate
          testID
          typeID
          schoolYear
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateTest = /* GraphQL */ `
  mutation UpdateTest(
    $input: UpdateTestInput!
    $condition: ModelTestConditionInput
  ) {
    updateTest(input: $input, condition: $condition) {
      id
      dataType
      typeID
      testName
      year
      nationalMean
      isRandomOrder
      isSortedByComplexity
      testUnitID
      thresholds {
        items {
          id
          testID
          scaledBottom
          scaledTop
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testType {
        id
        typeName
        description
        testUnitID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      testUnit {
        id
        unitName
        testUnitTestResults {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      testUploads {
        items {
          id
          testDate
          testID
          typeID
          schoolYear
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteTest = /* GraphQL */ `
  mutation DeleteTest(
    $input: DeleteTestInput!
    $condition: ModelTestConditionInput
  ) {
    deleteTest(input: $input, condition: $condition) {
      id
      dataType
      typeID
      testName
      year
      nationalMean
      isRandomOrder
      isSortedByComplexity
      testUnitID
      thresholds {
        items {
          id
          testID
          scaledBottom
          scaledTop
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testType {
        id
        typeName
        description
        testUnitID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      testUnit {
        id
        unitName
        testUnitTestResults {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      testUploads {
        items {
          id
          testDate
          testID
          typeID
          schoolYear
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createTestResult = /* GraphQL */ `
  mutation CreateTestResult(
    $input: CreateTestResultInput!
    $condition: ModelTestResultConditionInput
  ) {
    createTestResult(input: $input, condition: $condition) {
      id
      testID
      testDate
      completedDate
      typeID
      schoolYear
      nationalBand
      minStandard
      level
      testUploadID
      testUnitTestResults {
        items {
          id
          testUnitID
          testResultID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testType {
        id
        typeName
        description
        testUnitID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      test {
        id
        dataType
        typeID
        testName
        year
        nationalMean
        isRandomOrder
        isSortedByComplexity
        testUnitID
        thresholds {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUploads {
          nextToken
          startedAt
        }
      }
      testUpload {
        id
        testDate
        testID
        typeID
        schoolYear
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        test {
          id
          dataType
          typeID
          testName
          year
          nationalMean
          isRandomOrder
          isSortedByComplexity
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testResults {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateTestResult = /* GraphQL */ `
  mutation UpdateTestResult(
    $input: UpdateTestResultInput!
    $condition: ModelTestResultConditionInput
  ) {
    updateTestResult(input: $input, condition: $condition) {
      id
      testID
      testDate
      completedDate
      typeID
      schoolYear
      nationalBand
      minStandard
      level
      testUploadID
      testUnitTestResults {
        items {
          id
          testUnitID
          testResultID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testType {
        id
        typeName
        description
        testUnitID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      test {
        id
        dataType
        typeID
        testName
        year
        nationalMean
        isRandomOrder
        isSortedByComplexity
        testUnitID
        thresholds {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUploads {
          nextToken
          startedAt
        }
      }
      testUpload {
        id
        testDate
        testID
        typeID
        schoolYear
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        test {
          id
          dataType
          typeID
          testName
          year
          nationalMean
          isRandomOrder
          isSortedByComplexity
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testResults {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteTestResult = /* GraphQL */ `
  mutation DeleteTestResult(
    $input: DeleteTestResultInput!
    $condition: ModelTestResultConditionInput
  ) {
    deleteTestResult(input: $input, condition: $condition) {
      id
      testID
      testDate
      completedDate
      typeID
      schoolYear
      nationalBand
      minStandard
      level
      testUploadID
      testUnitTestResults {
        items {
          id
          testUnitID
          testResultID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testType {
        id
        typeName
        description
        testUnitID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      test {
        id
        dataType
        typeID
        testName
        year
        nationalMean
        isRandomOrder
        isSortedByComplexity
        testUnitID
        thresholds {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUploads {
          nextToken
          startedAt
        }
      }
      testUpload {
        id
        testDate
        testID
        typeID
        schoolYear
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        test {
          id
          dataType
          typeID
          testName
          year
          nationalMean
          isRandomOrder
          isSortedByComplexity
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testResults {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createTestUpload = /* GraphQL */ `
  mutation CreateTestUpload(
    $input: CreateTestUploadInput!
    $condition: ModelTestUploadConditionInput
  ) {
    createTestUpload(input: $input, condition: $condition) {
      id
      testDate
      testID
      typeID
      schoolYear
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testType {
        id
        typeName
        description
        testUnitID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      test {
        id
        dataType
        typeID
        testName
        year
        nationalMean
        isRandomOrder
        isSortedByComplexity
        testUnitID
        thresholds {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUploads {
          nextToken
          startedAt
        }
      }
      testResults {
        items {
          id
          testID
          testDate
          completedDate
          typeID
          schoolYear
          nationalBand
          minStandard
          level
          testUploadID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateTestUpload = /* GraphQL */ `
  mutation UpdateTestUpload(
    $input: UpdateTestUploadInput!
    $condition: ModelTestUploadConditionInput
  ) {
    updateTestUpload(input: $input, condition: $condition) {
      id
      testDate
      testID
      typeID
      schoolYear
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testType {
        id
        typeName
        description
        testUnitID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      test {
        id
        dataType
        typeID
        testName
        year
        nationalMean
        isRandomOrder
        isSortedByComplexity
        testUnitID
        thresholds {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUploads {
          nextToken
          startedAt
        }
      }
      testResults {
        items {
          id
          testID
          testDate
          completedDate
          typeID
          schoolYear
          nationalBand
          minStandard
          level
          testUploadID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteTestUpload = /* GraphQL */ `
  mutation DeleteTestUpload(
    $input: DeleteTestUploadInput!
    $condition: ModelTestUploadConditionInput
  ) {
    deleteTestUpload(input: $input, condition: $condition) {
      id
      testDate
      testID
      typeID
      schoolYear
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      testType {
        id
        typeName
        description
        testUnitID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      test {
        id
        dataType
        typeID
        testName
        year
        nationalMean
        isRandomOrder
        isSortedByComplexity
        testUnitID
        thresholds {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        testType {
          id
          typeName
          description
          testUnitID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUnit {
          id
          unitName
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        testUploads {
          nextToken
          startedAt
        }
      }
      testResults {
        items {
          id
          testID
          testDate
          completedDate
          typeID
          schoolYear
          nationalBand
          minStandard
          level
          testUploadID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
