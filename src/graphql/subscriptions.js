/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTestUnitTestResult = /* GraphQL */ `
  subscription OnCreateTestUnitTestResult {
    onCreateTestUnitTestResult {
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
export const onUpdateTestUnitTestResult = /* GraphQL */ `
  subscription OnUpdateTestUnitTestResult {
    onUpdateTestUnitTestResult {
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
export const onDeleteTestUnitTestResult = /* GraphQL */ `
  subscription OnDeleteTestUnitTestResult {
    onDeleteTestUnitTestResult {
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
export const onCreateThreshold = /* GraphQL */ `
  subscription OnCreateThreshold {
    onCreateThreshold {
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
export const onUpdateThreshold = /* GraphQL */ `
  subscription OnUpdateThreshold {
    onUpdateThreshold {
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
export const onDeleteThreshold = /* GraphQL */ `
  subscription OnDeleteThreshold {
    onDeleteThreshold {
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
export const onCreateTestType = /* GraphQL */ `
  subscription OnCreateTestType {
    onCreateTestType {
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
export const onUpdateTestType = /* GraphQL */ `
  subscription OnUpdateTestType {
    onUpdateTestType {
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
export const onDeleteTestType = /* GraphQL */ `
  subscription OnDeleteTestType {
    onDeleteTestType {
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
export const onCreateTestUnit = /* GraphQL */ `
  subscription OnCreateTestUnit {
    onCreateTestUnit {
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
export const onUpdateTestUnit = /* GraphQL */ `
  subscription OnUpdateTestUnit {
    onUpdateTestUnit {
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
export const onDeleteTestUnit = /* GraphQL */ `
  subscription OnDeleteTestUnit {
    onDeleteTestUnit {
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
export const onCreateTest = /* GraphQL */ `
  subscription OnCreateTest {
    onCreateTest {
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
export const onUpdateTest = /* GraphQL */ `
  subscription OnUpdateTest {
    onUpdateTest {
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
export const onDeleteTest = /* GraphQL */ `
  subscription OnDeleteTest {
    onDeleteTest {
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
export const onCreateTestResult = /* GraphQL */ `
  subscription OnCreateTestResult {
    onCreateTestResult {
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
export const onUpdateTestResult = /* GraphQL */ `
  subscription OnUpdateTestResult {
    onUpdateTestResult {
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
export const onDeleteTestResult = /* GraphQL */ `
  subscription OnDeleteTestResult {
    onDeleteTestResult {
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
export const onCreateTestUpload = /* GraphQL */ `
  subscription OnCreateTestUpload {
    onCreateTestUpload {
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
export const onUpdateTestUpload = /* GraphQL */ `
  subscription OnUpdateTestUpload {
    onUpdateTestUpload {
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
export const onDeleteTestUpload = /* GraphQL */ `
  subscription OnDeleteTestUpload {
    onDeleteTestUpload {
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
