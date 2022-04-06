/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      value
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudy = /* GraphQL */ `
  query GetStudy($id: ID!) {
    getStudy(id: $id) {
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
export const listStudies = /* GraphQL */ `
  query ListStudies(
    $filter: ModelStudyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        startDate
        notes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studyId
        name
        description
        study {
          id
          name
          startDate
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
