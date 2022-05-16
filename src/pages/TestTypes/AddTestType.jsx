import { useState } from 'react';
import { API } from 'aws-amplify';
import { createTestType as createTestTypeMutation } from '../../graphql/mutations';
import { CFormInput, CButton, CFormSelect, CFormTextarea } from '@coreui/react';
import { BasicAddButtonWrapper, BasicAddInputWrapper, BasicAddWrapper } from '../../util/genericStyles';
import { testTypes, testUnits } from '../../util/bezvezeKonstanteDokTestiram';
export const AddTestType = () => {
  return (
    <BasicAddWrapper>
      <Form />
    </BasicAddWrapper>
  );
};

const initialForm = {
  typeName: '',
  description: '',
  testUnitID: '',
};
const Form = () => {
  const [formData, setFormData] = useState(initialForm);

  const handleFormChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const checkIfFormValid = () => {
    return !formData.typeName || !formData.description || !formData.testUnitID;
  };
  const createTestType = async () => {
    try {
      if (!checkIfFormValid) return;
      await API.graphql({ query: createTestTypeMutation, variables: { input: formData } });
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
      <h1 style={headerStyle}>Add a new Test Type</h1>
      <CFormInput
        className="form_input"
        name="typeName"
        onChange={(e) => handleFormChange(e.target.name, e.target.value)}
        placeholder="Test Type name"
      />
      <CFormTextarea
        className="form_input"
        name="description"
        type="textarea"
        onChange={(e) => handleFormChange(e.target.name, e.target.value)}
        placeholder="Test Type description"
      />
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
        <CButton className="button" onClick={createTestType}>
          Add Test Type
        </CButton>
      </BasicAddButtonWrapper>
    </BasicAddInputWrapper>
  );
};
