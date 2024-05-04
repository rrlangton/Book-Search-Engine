import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation LoginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
      bookCount
    }
  }
}
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      bookCount
      username
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
}
`;

export const SAVE_BOOK = gql`
mutation SaveBook($bookData: BookData) {
  saveBook(bookData: $bookData) {
    _id
    bookCount
    username
    email
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;

export const DELETE_BOOK = gql`
mutation DeleteBook($bookId: ID!) {
  deleteBook(bookId: $bookId) {
    _id
    bookCount
    email
    username
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`;
