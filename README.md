<!-- Expected Case -->
query {
  getUser(id: 1) {
    ...on User{
      firstName
      lastName
    }
    ...on GenericError{
      message
    }
  }
}


<!-- Exception Case -->


query {
  getUser(id: 7) {
    ...on User{
      firstName
      lastName
    }
    ...on GenericError{
      message
    }
  }
}


Talk Notes:

Talk about schemaless errors and how graphql by default propagates errors