import {
  CModal,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { listTests } from '../../graphql/queries';
import { fetchListItems } from '../../util/fetchListItems';
import { BasicTableWrapper, BasicWrapper } from '../../util/genericStyles';
import { AddTest } from './AddTest';
import { TestsWrapper } from './Tests.styles';
import { TestTableWrapper } from './Tests.styles';
export const Tests = () => {
  const [tests, setTests] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchTests();
  }, []);

  async function fetchTests() {
    try {
      const testsAPI = await fetchListItems(listTests, 'listTests');
      setTests(testsAPI);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <BasicWrapper>
      <PageHeader
        title="Tests"
        button={{
          title: 'Add Test',
          onClick: () => {
            setModalOpen(true);
          },
        }}
      />
      <BasicTableWrapper>
        <CTable>
          <CTableCaption>List Of Tests</CTableCaption>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>#</CTableHeaderCell>
              <CTableHeaderCell>Test Name</CTableHeaderCell>
              <CTableHeaderCell>Test Year</CTableHeaderCell>
              <CTableHeaderCell>Test Type</CTableHeaderCell>
              <CTableHeaderCell>Test Unit</CTableHeaderCell>
              <CTableHeaderCell>Test Uploads</CTableHeaderCell>
              <CTableHeaderCell>Thresholds</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {tests?.map((test, i = 0) => (
              <CTableRow>
                <CTableHeaderCell>#{++i}</CTableHeaderCell>
                <CTableDataCell>{test.testName}</CTableDataCell>
                <CTableDataCell>{test.year}</CTableDataCell>
                <CTableDataCell>{test.testType.typeName}</CTableDataCell>
                <CTableDataCell>{test.testUnit.unitName}</CTableDataCell>
                <CTableDataCell>{test.testUploads.length}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </BasicTableWrapper>
      <CModal
        visible={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <AddTest />
      </CModal>
    </BasicWrapper>
  );
};
