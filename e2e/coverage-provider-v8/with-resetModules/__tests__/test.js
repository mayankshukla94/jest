/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

test('dummy', () => {
  const {value} = require('../module');
  expect(value).toBe('abc');
});

test('reset dummy', () => {
  const {value} = require('../module');
  expect(value).toBe('abc');
});
