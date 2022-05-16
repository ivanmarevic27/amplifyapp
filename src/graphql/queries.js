/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncTestUnitTestResults = /* GraphQL */ `
  query SyncTestUnitTestResults(
    $filter: ModelTestUnitTestResultFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTestUnitTestResults(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getTestUnitTestResult = /* GraphQL */ `
  query GetTestUnitTestResult($id: ID!) {
    getTestUnitTestResult(id: $id) {
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
export const listTestUnitTestResults = /* GraphQL */ `
  query ListTestUnitTestResults(
    $filter: ModelTestUnitTestResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestUnitTestResults(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncThresholds = /* GraphQL */ `
  query SyncThresholds(
    $filter: ModelThresholdFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncThresholds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getThreshold = /* GraphQL */ `
  query GetThreshold($id: ID!) {
    getThreshold(id: $id) {
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
export const listThresholds = /* GraphQL */ `
  query ListThresholds(
    $filter: ModelThresholdFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThresholds(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getTestType = /* GraphQL */ `
  query GetTestType($id: ID!) {
    getTestType(id: $id) {
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
export const listTestTypes = /* GraphQL */ `
  query ListTestTypes(
    $filter: ModelTestTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestTypeByName = /* GraphQL */ `
  query GetTestTypeByName(
    $typeName: String
    $sortDirection: ModelSortDirection
    $filter: ModelTestTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTestTypeByName(
      typeName: $typeName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTestTypes = /* GraphQL */ `
  query SyncTestTypes(
    $filter: ModelTestTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTestTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestUnit = /* GraphQL */ `
  query GetTestUnit($id: ID!) {
    getTestUnit(id: $id) {
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
export const listTestUnits = /* GraphQL */ `
  query ListTestUnits(
    $filter: ModelTestUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestUnitByName = /* GraphQL */ `
  query GetTestUnitByName(
    $unitName: String
    $sortDirection: ModelSortDirection
    $filter: ModelTestUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTestUnitByName(
      unitName: $unitName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTestUnits = /* GraphQL */ `
  query SyncTestUnits(
    $filter: ModelTestUnitFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTestUnits(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
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
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestsByType = /* GraphQL */ `
  query GetTestsByType(
    $typeID: ID
    $testName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTestsByType(
      typeID: $typeID
      testName: $testName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestByName = /* GraphQL */ `
  query GetTestByName(
    $testName: String
    $sortDirection: ModelSortDirection
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTestByName(
      testName: $testName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const searchTestsByName = /* GraphQL */ `
  query SearchTestsByName(
    $dataType: String
    $sortDirection: ModelSortDirection
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    searchTestsByName(
      dataType: $dataType
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestsByYear = /* GraphQL */ `
  query GetTestsByYear(
    $year: Int
    $sortDirection: ModelSortDirection
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTestsByYear(
      year: $year
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestsSortedByName = /* GraphQL */ `
  query GetTestsSortedByName(
    $dataType: String
    $testName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTestsSortedByName(
      dataType: $dataType
      testName: $testName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTests = /* GraphQL */ `
  query SyncTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestResult = /* GraphQL */ `
  query GetTestResult($id: ID!) {
    getTestResult(id: $id) {
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
export const listTestResults = /* GraphQL */ `
  query ListTestResults(
    $filter: ModelTestResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestResultsByTest = /* GraphQL */ `
  query GetTestResultsByTest(
    $testID: ID
    $testDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTestResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTestResultsByTest(
      testID: $testID
      testDate: $testDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestResultsByTestUpload = /* GraphQL */ `
  query GetTestResultsByTestUpload(
    $testUploadID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelTestResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTestResultsByTestUpload(
      testUploadID: $testUploadID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTestResults = /* GraphQL */ `
  query SyncTestResults(
    $filter: ModelTestResultFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTestResults(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestUpload = /* GraphQL */ `
  query GetTestUpload($id: ID!) {
    getTestUpload(id: $id) {
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
export const listTestUploads = /* GraphQL */ `
  query ListTestUploads(
    $filter: ModelTestUploadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestUploads(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestUploadByTest = /* GraphQL */ `
  query GetTestUploadByTest(
    $testID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelTestUploadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTestUploadByTest(
      testID: $testID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestUploadsByYear = /* GraphQL */ `
  query GetTestUploadsByYear(
    $schoolYear: Int
    $testDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTestUploadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTestUploadsByYear(
      schoolYear: $schoolYear
      testDate: $testDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getTestUploadsByTypeByYear = /* GraphQL */ `
  query GetTestUploadsByTypeByYear(
    $typeID: ID
    $schoolYear: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTestUploadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getTestUploadsByTypeByYear(
      typeID: $typeID
      schoolYear: $schoolYear
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTestUploads = /* GraphQL */ `
  query SyncTestUploads(
    $filter: ModelTestUploadFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTestUploads(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
