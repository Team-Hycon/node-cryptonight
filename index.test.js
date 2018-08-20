// Copyright (c) 2017 ExcitableAardvark <excitableaardvark@tutanota.de>
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//    conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//    of conditions and the following disclaimer in the documentation and/or other
//    materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//    used to endorse or promote products derived from this software without specific
//    prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* eslint-env jest */

const cryptonight = require('./')

test('async hash of string', done => {
  return cryptonight.asyncHash(Buffer.from('28398b837893ce78c66dc326528517c801cdcb51bdfb0838a835088e57e5bbf4e93999c5c62b23af2c2656162408643292206b3f8517bb1fe1da9d15a3d9c2abee010000b5020000', 16), data => {
    expect(data.toString('hex'))
      .toBe('55a680f4e74e717c7b6560ced92d240f1e10b2957dc80d70520ca31280bfd65e')
    done()
  })
})

test('async invalid argument throws exception', () => {
  expect(() => cryptonight.asyncHash('not a buffer'))
    .toThrow(/buffer/)
})

test('async no argument throws exception', () => {
  expect(() => cryptonight.asyncHash())
    .toThrow(/buffer/)
})

test('extra arguments throws exception', () => {
  expect(() => cryptonight.asyncHash(Buffer.from(''), () => {}, 0))
    .toThrow(/buffer/)
})

test('sync hash of test string', () => {
  expect(cryptonight.hash(Buffer.from('28398b837893ce78c66dc326528517c801cdcb51bdfb0838a835088e57e5bbf4e93999c5c62b23af2c2656162408643292206b3f8517bb1fe1da9d15a3d9c2abee010000b5020000')).toString('hex'))
    .toBe('55a680f4e74e717c7b6560ced92d240f1e10b2957dc80d70520ca31280bfd65e')
})

test('sync invalid argument throws exception', () => {
  expect(() => cryptonight.hash('not a buffer'))
    .toThrow(/buffer/)
})

test('sync no argument throws exception', () => {
  expect(() => cryptonight.hash())
    .toThrow(/buffer/)
})

test('sync extra arguments throws exception', () => {
  expect(() => cryptonight.hash(Buffer.from(''), 0))
    .toThrow(/buffer/)
})
