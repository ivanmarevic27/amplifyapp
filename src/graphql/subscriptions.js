/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      value
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudy = /* GraphQL */ `
  subscription OnCreateStudy {
    onCreateStudy {
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
export const onUpdateStudy = /* GraphQL */ `
  subscription OnUpdateStudy {
    onUpdateStudy {
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
export const onDeleteStudy = /* GraphQL */ `
  subscription OnDeleteStudy {
    onDeleteStudy {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
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
