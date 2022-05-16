import { Tests } from '../../pages/Tests/Tests';
import { TestResults } from '../../pages/TestResults/TestResults';
import { TestTypes } from '../../pages/TestTypes/TestTypes';
import { TestUnits } from '../../pages/TestUnits/TestUnits';
import { TestUnitsTestResults } from '../../pages/TestUnitsTestResults/TestUnitsTestResults';
import { TestUploads } from '../../pages/TestUploads/TestUploads';
import { Thresholds } from '../../pages/Thresholds/Thresholds';
import {
  TESTS,
  TEST_RESULTS,
  TEST_TYPES,
  TEST_UNITS,
  TEST_UNITS_TEST_RESULTS,
  TEST_UPLOADS,
  THRESHOLDS,
} from '../constants/Router.constants';
export const navBarOutlets = [
  {
    path: TESTS,
    name: 'Tests page',
    component: Tests,
  },
  {
    path: TEST_RESULTS,
    name: 'Test results page',
    component: TestResults,
  },
  {
    path: TEST_TYPES,
    name: 'Test types page',
    component: TestTypes,
  },
  {
    path: TEST_UNITS,
    name: 'Test units page',
    component: TestUnits,
  },
  {
    path: TEST_UNITS_TEST_RESULTS,
    name: 'Test units-Test results page',
    component: TestUnitsTestResults,
  },
  {
    path: TEST_UPLOADS,
    name: 'Test uploads page',
    component: TestUploads,
  },
  {
    path: THRESHOLDS,
    name: 'Thresholds page',
    component: Thresholds,
  },
];
