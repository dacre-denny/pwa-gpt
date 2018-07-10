var assert = require('chai').assert;

import * as API from "../src/api";

describe('The API module', function() {
  describe('The getQuestions method', function() {

    it('should return undefined if an undefined age is provided', function() {

      assert.isUndefined(API.getQuestions());
    });

    it('should return questions for teenagers if teenager age is provided', function() {

      const questions = API.getQuestions('teenager');

      assert.isArray(questions)
      assert.lengthOf(questions, 4)      
      assert.isTrue(questions.every(({ image, text, guilty }) => {
        return image.match(/^\/img\/teen-\w+.jpg$/gi) && !!text && guilty === false
      }))

    });

    it('should return questions for adults if adult age is provided', function() {

      const questions = API.getQuestions('adult');

      assert.isArray(questions)
      assert.lengthOf(questions, 4)      
      assert.isTrue(questions.every(({ image, text, guilty }) => {
        return image.match(/^\/img\/adult-\w+.jpg$/gi) && !!text && guilty === false
      }))

    });

    it('should return questions for children if child age is provided', function() {

      const questions = API.getQuestions('child');

      assert.isArray(questions)
      assert.lengthOf(questions, 4)      
      assert.isTrue(questions.every(({ image, text, guilty }) => {
        return image.match(/^\/img\/child-\w+.jpg$/gi) && !!text && guilty === false
      }))

    });

    it('should return questions for children if unknown age provided', function() {

      const questions = API.getQuestions('unknownage');

      assert.isArray(questions)
      assert.lengthOf(questions, 4)      
      assert.isTrue(questions.every(({ image, text, guilty }) => {
        return image.match(/^\/img\/child-\w+.jpg$/gi) && !!text && guilty === false
      }))

    });
  });
});