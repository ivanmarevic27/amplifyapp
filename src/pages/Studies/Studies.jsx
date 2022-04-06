import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listStudies } from '../../graphql/queries';
import { CListGroup, CListGroupItem, CHeader, CFormInput, CButton } from '@coreui/react';
import { createStudy as createStudyMutation, deleteStudy as deleteStudyMutation } from '../../graphql/mutations';
import { StudiesInputWrapper, StudiesWrapper } from './Studies.styles';
import { fetchListItems } from '../../util/fetchListItems';

const initialFormState = { name: '', startDate: '2022-04-01' };

export const Studies = () => {
  const [studies, setStudies] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchStudies();
  }, []);

  async function fetchStudies() {
    try {
      const studiesFromAPI = await fetchListItems(listStudies, 'listStudies');
      setStudies(studiesFromAPI);
    } catch (error) {
      console.log(error);
    }
  }

  async function createStudy() {
    try {
      if (!formData.name || !formData.startDate) return;
      const startDateString = new Date(formData.startDate).toDateString();
      formData.startDate = startDateString;
      await API.graphql({ query: createStudyMutation, variables: { input: formData } });

      setStudies([...studies, formData]);
      setFormData(initialFormState);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteStudy({ id }) {
    const newStudysArray = studies.filter((study) => study.id !== id);
    setStudies(newStudysArray);
    await API.graphql({ query: deleteStudyMutation, variables: { input: { id } } });
  }
  return (
    <StudiesWrapper>
      <StudiesInputWrapper className="mt-4">
        <CFormInput
          className="me-3"
          column
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Study name"
          value={formData.name}
        />
        <CFormInput
          className="me-3"
          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
          placeholder="Study start date"
          type="date"
          value={formData.startDate}
        />
        <CButton onClick={createStudy}>Create Study</CButton>
      </StudiesInputWrapper>

      <CListGroup>
        {studies.map((study) => (
          <CListGroupItem key={study.id || study.name} className="mb-4 border-top">
            <CHeader className="mb-3">Name : </CHeader>
            <p>{study.name}</p>
            <CHeader className="mb-3">Start Date : </CHeader>

            <p>{study.startDate}</p>
            <CButton onClick={() => deleteStudy(study)}>DELETE</CButton>
          </CListGroupItem>
        ))}
      </CListGroup>
    </StudiesWrapper>
  );
};
