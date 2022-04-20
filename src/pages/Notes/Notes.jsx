import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listNotes, listStudies } from '../../graphql/queries';
import { CListGroup, CListGroupItem, CHeader, CForm, CFormInput, CButton, CFormSelect } from '@coreui/react';
import { ListItem, NotesInputWrapper, NotesWrapper } from './Notes.styles';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from '../../graphql/mutations';
import { fetchListItems } from '../../util/fetchListItems';

const initialFormState = { name: '', description: '', studyId: '' };

export const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [studies, setStudies] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
    fetchStudies();
  }, []);

  async function fetchNotes() {
    try {
      const notesFromAPI = await fetchListItems(listNotes, 'listNotes');
      if (notesFromAPI != null) {
        setNotes(notesFromAPI);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchStudies() {
    try {
      const studiesFromAPI = await fetchListItems(listStudies, 'listStudies');
      if (studiesFromAPI != null) {
        setStudies(studiesFromAPI);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function createNote() {
    try {
      console.log(formData.studyId);
      if (!formData.name || !formData.description || !formData.studyId) return;
      await API.graphql({ query: createNoteMutation, variables: { input: formData } });

      setNotes([...notes, formData]);
      setFormData(initialFormState);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter((note) => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({ query: deleteNoteMutation, variables: { input: { id } } });
  }
  return (
    <NotesWrapper>
      <NotesInputWrapper className="mt-4">
        <CFormInput
          className="me-3"
          column
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Note name"
          value={formData.name}
        />
        <CFormInput
          className="me-3"
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Note description"
          value={formData.description}
        />
        <CFormSelect
          className="me-3"
          value={formData.studyId}
          onChange={(e) => setFormData({ ...formData, studyId: e.target.value })}
        >
          <option value="">Please select study</option>
          {studies.map((study) => {
            return <option value={study.id}>{study.name}</option>;
          })}
        </CFormSelect>
        <CButton onClick={createNote}>Create Note</CButton>
      </NotesInputWrapper>

      <CListGroup>
        {notes.map((note) => (
          <CListGroupItem key={note.id || note.name} className="mb-4 border-top">
            <CHeader className="mb-3">Name : </CHeader>
            <p>{note.name}</p>
            <CHeader className="mb-3">Description : </CHeader>
            <p>{note.description}</p>
            <CHeader className="mb-3">Study name : </CHeader>
            <p>{note.study.name}</p>

            <CButton onClick={() => deleteNote(note)}>DELETE</CButton>
          </CListGroupItem>
        ))}
      </CListGroup>
    </NotesWrapper>
  );
};
