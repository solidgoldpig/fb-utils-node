module.exports = () => ({
  files: [
    { pattern: 'index.js', load: false },
    { pattern: 'lib/**/*.js', load: false },
    "!lib/**/*.unit.spec.js"
  ],
  tests: [
    'index.unit.spec.js',
    'lib/**/*.unit.spec.js'
  ],
  env: {
    type: 'node'
  },
  testFramework: 'tape',
  workers: {
    restart: true
  }
})
