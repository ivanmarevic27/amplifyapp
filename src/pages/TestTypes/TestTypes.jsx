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
import { listTestTypes } from '../../graphql/queries';
import { fetchListItems } from '../../util/fetchListItems';
import { BasicTableWrapper, BasicWrapper } from '../../util/genericStyles';
import { AddTestType } from './AddTestType';
export const TestTypes = () => {
  const [testTypes, setTestTypes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchTestTypes();
  }, []);

  async function fetchTestTypes() {
    try {
      const testTypesAPI = await fetchListItems(listTestTypes, 'listTestTypes');
      setTestTypes(testTypesAPI);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <BasicWrapper>
      <PageHeader
        title="Test Types"
        button={{
          title: 'Add Test Type',
          onClick: () => {
            setModalOpen(true);
          },
        }}
      />
      <BasicTableWrapper>
        <CTable>
          <CTableCaption>List Of Test Types</CTableCaption>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>#</CTableHeaderCell>
              <CTableHeaderCell>Name</CTableHeaderCell>
              <CTableHeaderCell>Description</CTableHeaderCell>
              <CTableHeaderCell>Test Unit name</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {testTypes?.map((test, i = 0) => (
              <CTableRow>
                <CTableHeaderCell>#{++i}</CTableHeaderCell>
                <CTableDataCell>{test.typeName}</CTableDataCell>
                <CTableDataCell>{test.description}</CTableDataCell>
                <CTableDataCell>{test.testUnit.unitName}</CTableDataCell>
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
        <AddTestType />
      </CModal>
    </BasicWrapper>
  );
};
