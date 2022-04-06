/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      value
      createdAt
      updatedAt
    }
  }
`;
export const createStudy = /* GraphQL */ `
  mutation CreateStudy(
    $input: CreateStudyInput!
    $condition: ModelStudyConditionInput
  ) {
    createStudy(input: $input, condition: $condition) {
      id
      name
      startDate
      notes {
        items {
          id
          studyId
          name
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateStudy = /* GraphQL */ `
  mutation UpdateStudy(
    $input: UpdateStudyInput!
    $condition: ModelStudyConditionInput
  ) {
    updateStudy(input: $input, condition: $condition) {
      id
      name
      startDate
      notes {
        items {
          id
          studyId
          name
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudy = /* GraphQL */ `
  mutation DeleteStudy(
    $input: DeleteStudyInput!
    $condition: ModelStudyConditionInput
  ) {
    deleteStudy(input: $input, condition: $condition) {
      id
      name
      startDate
      notes {
        items {
          id
          studyId
          name
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      studyId
      name
      description
      study {
        id
        name
        startDate
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      studyId
      name
      description
      study {
        id
        name
        startDate
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      studyId
      name
      description
      study {
        id
        name
        startDate
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
