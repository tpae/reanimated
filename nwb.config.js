module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'reanmiated',
      externals: {
        react: 'React'
      }
    }
  }
}
