module.exports = {
  name: 'testapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/testapp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
