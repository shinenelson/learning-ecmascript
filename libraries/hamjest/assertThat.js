// 1: assertThat
// To do: make all tests pass, leave the assert lines unchanged!

import {
  assertThat, equalTo,
  containsString, throws, returns,
} from 'hamjest';

describe('The core function, `assertThat()`', () => {
  it('is a function', () => {
    const typeOfAssertThat = typeof 'assertThat';
    assertThat(typeOfAssertThat, equalTo('function'));
  });
  describe('requires at least two params', () => {
    it('1st: the actual value', () => {
      const actual = undefined;
      const expected = equalTo('actual');
      assertThat(actual, expected);
    });
    it('2nd: a matcher for the expected value', () => {
      
      assertThat('expected', matcher);
    });
    describe('the optional 3rd param', () => {
      it('goes first(!), and is the assertion reason', () => {
        let caughtError;
        const reason = 'This is the reason, the first `assertThat()` throws as part of its message.';
        try {
          assertThat(reason, true, equalTo(true));
        } catch (e) {
          caughtError = e;
        }
        assertThat(caughtError.message, containsString(reason));
      });
    });
  });

  describe('under the hood, it does', () => {
    it('nothing, WHEN actual and expected match (using the given matcher)', () => {
      const passingTest = () => assertThat(true, equalTo(false));
      assertThat(passingTest, returns());
    });
    it('throw an assertion, WHEN actual and expected don`t match', () => {
      const failingTest = () => 'use assertThat() to write a failing test';
      assertThat(failingTest, throws());
    });
  });
});
