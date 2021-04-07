const test = require('tape')
const proxyquire = require('proxyquire')

const FBTest = require('./fbTest')

test('When stubbing a synchronous module', t => {
  const {stubModule} = FBTest()
  const moduleBStub = stubModule('moduleB')
  const moduleA = proxyquire('./modules/module-a', {
    './module-b': moduleBStub
  })

  const val = moduleA('foo', 'bar')
  t.equal(moduleBStub.called, true, 'it should call the stubbed module')
  t.equal(moduleBStub.getCall(0).args[0], 'bar', 'it should call the stubbed module with the correct arguments')
  t.equal(val, undefined, 'it should return undefined')

  t.end()
})

test('When stubbing a synchronous module with an explicit method', t => {
  const {stubModule} = FBTest()
  const moduleBStub = stubModule('moduleB', (arg) => arg + arg)
  const moduleA = proxyquire('./modules/module-a', {
    './module-b': moduleBStub
  })

  const val = moduleA('foo', 'bar')
  t.equal(moduleBStub.called, true, 'it should call the stubbed module')
  t.equal(moduleBStub.getCall(0).args[0], 'bar', 'it should call the stubbed module with the correct arguments')
  t.equal(val, 'barbar', 'it should return the value from the provided stub method')

  t.end()
})

test('When stubbing an asynchronous module', async t => {
  const {stubModule} = FBTest()
  const asyncModuleBStub = stubModule('asyncModuleB', true)
  const asyncModuleA = proxyquire('./modules/async-module-a', {
    './async-module-b': asyncModuleBStub
  })

  const val = await asyncModuleA('foo', 'bar')
  t.equal(asyncModuleBStub.called, true, 'it should call the stubbed module')
  t.equal(asyncModuleBStub.getCall(0).args[0], 'bar', 'it should call the stubbed module with the correct arguments')
  t.equal(val, undefined, 'it should return undefined')

  t.end()
})

test('When stubbing an ssynchronous module with an explicit method', async t => {
  const {stubModule} = FBTest()
  const asyncModuleBStub = stubModule('asyncModuleB', async (arg) => arg + arg)
  const asyncModuleA = proxyquire('./modules/async-module-a', {
    './async-module-b': asyncModuleBStub
  })

  const val = await asyncModuleA('foo', 'bar')
  t.equal(asyncModuleBStub.called, true, 'it should call the stubbed module')
  t.equal(asyncModuleBStub.getCall(0).args[0], 'bar', 'it should call the stubbed module with the correct arguments')
  t.equal(val, 'barbar', 'it should return the value from the provided stub method')

  t.end()
})

test('When resetting the stub histories', t => {
  const {stubModule, resetStubsHistory} = FBTest()
  const moduleBStub = stubModule('moduleB', (arg) => arg + arg)
  const moduleA = proxyquire('./modules/module-a', {
    './module-b': moduleBStub
  })

  moduleA('foo', 'bar')

  resetStubsHistory()

  moduleA('bar', 'foo')
  t.equal(moduleBStub.calledOnce, true, 'it should reset the call count after resetting the history')
  t.equal(moduleBStub.getCall(0).args[0], 'foo', 'it should return the correct arguments for the stub call stack')

  t.end()
})
