const test = require('tape')

const FBError = require('./fbError')

test('When FBError is thrown', t => {
  const e = new FBError()

  t.equals(e.name, 'FBError', 'it should have the correct error name')

  t.end()
})

test('When FBError is thrown without a message', t => {
  const e = new FBError()

  t.equals(e.message, undefined, 'it should have no message')

  t.end()
})

test('When FBError is thrown with a message', t => {
  const e = new FBError('Something went wrong')

  t.equals(e.message, 'Something went wrong', 'it should have the correct message')

  t.end()
})

test('When FBError is thrown with a message and an error object', t => {
  const e = new FBError('Something went wrong', {
    error: {
      code: 'ESOMETHINGWENTWRONG'
    }
  })

  t.equals(e.name, 'FBError', 'it should have the correct error name')
  t.equals(e.message, 'Something went wrong', 'it should have the correct message')
  t.equals(e.code, 'ESOMETHINGWENTWRONG', 'it should have the correct code')

  t.end()
})

test('When FBError is thrown with an error object but without a message param', t => {
  const e = new FBError({
    error: {
      code: 'ESOMETHINGWENTWRONG'
    }
  })

  t.equals(e.message, undefined, 'it should have no message')
  t.equals(e.code, 'ESOMETHINGWENTWRONG', 'it should have the correct code')

  const e2 = new FBError({
    error: {
      message: 'Something went wrong',
      code: 'ESOMETHINGWENTWRONG'
    }
  })

  t.equals(e2.message, 'Something went wrong', 'it should have the correct message')
  t.equals(e2.code, 'ESOMETHINGWENTWRONG', 'it should have the correct code')

  t.end()
})

test('When FBError is thrown with additional data', t => {
  const e = new FBError('Something went wrong', {
    data: {
      foo: 'bar'
    }
  })

  t.deepEquals(e.data, {
    foo: 'bar'
  }, 'it should have the additional data as the data property')

  t.end()
})

test('When FBError is thrown with additional data without a message', t => {
  const e = new FBError({
    data: {
      foo: 'bar'
    }
  })

  t.deepEquals(e.data, {
    foo: 'bar'
  }, 'it should have the additional data as the data property')

  t.end()
})

test('When FBError is extended', t => {
  class MyError extends FBError {}
  const e = new MyError('error message')

  t.equals(e.name, 'MyError', 'it should have the correct error name')
  t.equals(e.message, 'error message', 'it should have the correct error message')

  t.end()
})

test('When FBError is extended and args are passed', t => {
  class MyError extends FBError { }
  const e = new MyError({
    message: 'error message'
  })
  t.equals(e.message, 'error message', 'it should have the correct error message')

  t.end()
})
