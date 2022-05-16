import { useState } from 'react';
import { AddTestInputWrapper, AddTestWrapper, ButtonsWrapper, ButtonWrapper } from './Tests.styles';
import { API } from 'aws-amplify';
import { createTest as createTestMutation } from '../../graphql/mutations';
import { CFormInput, CButton, CFormSelect } from '@coreui/react';
import { BasicAddButtonWrapper, BasicAddInputWrapper, BasicAddWrapper } from '../../util/genericStyles';
import { testTypes, testUnits } from '../../util/bezvezeKonstanteDokTestiram';
export const AddTest = () => {
  return (
    <BasicAddWrapper>
      <Form />
    </BasicAddWrapper>
  );
};

const initialForm = {
  dataType: '',
  typeID: '',
  testName: '',
  year: 2022,
  testUnitID: '',
};
const Form = () => {
  const [formData, setFormData] = useState(initialForm);

  const handleFormChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const checkIfFormValid = () => {
    return !formData.dataType || !formData.typeID || !formData.testName || !formData.year || !formData.testUnitID;
  };
  const createTest = async () => {
    try {
      if (!checkIfFormValid) return;
      formData.year = +formData.year;
      await API.graphql({ query: createTestMutation, variables: { input: formData } });
    } catch (error) {
      console.log(error);
    }
  };

  const headerStyle = {
    color: '#4777fc',
    marginTop: '1rem',
  };
  return (
    <BasicAddInputWrapper>
      <h1 style={headerStyle}>Add a new Test</h1>
      <CFormInput
        className="form_input"
        name="testName"
        onChange={(e) => handleFormChange(e.target.name, e.target.value)}
        placeholder="Test name"
      />

      <CFormInput
        className="form_input_number"
        name="year"
        onChange={(e) => handleFormChange(e.target.name, e.target.value)}
        placeholder="Test year"
        min="2012"
        max="2022"
        step="1"
        type="number"
      />
      <CFormInput
        className="form_input"
        name="testName"
        onChange={(e) => handleFormChange(e.target.name, e.target.value)}
        placeholder="Test name"
      />
      <CFormInput
        className="form_input"
        name="dataType"
        onChange={(e) => handleFormChange(e.target.name, e.target.value)}
        placeholder="Test data type"
      />
      <CFormSelect
        className="form_input"
        name="typeID"
        value={formData.typeID}
        onChange={(e) => handleFormChange(e.target.name, e.target.value)}
      >
        <option value="">Please select Test Type</option>
        {testTypes.map((type) => {
          return <option value={type.id}>{type.name}</option>;
        })}
      </CFormSelect>
      <CFormSelect
        className="form_input"
        name="testUnitID"
        value={formData.testUnitID}
        onChange={(e) => handleFormChange(e.target.name, e.target.value)}
      >
        <option value="">Please select Test Unit</option>
        {testUnits.map((unit) => {
          return <option value={unit.id}>{unit.name}</option>;
        })}
      </CFormSelect>
      <BasicAddButtonWrapper>
        <CButton className="button" onClick={createTest}>
          Add Test
        </CButton>
      </BasicAddButtonWrapper>
    </BasicAddInputWrapper>
  );
};
