/* global describe, it, beforeEach, __dirname */
import assert from 'power-assert';
import {
  assertThat, 
  promiseThat, is, fulfilled, rejected,
  allOf, truthy, everyItem,
  isRejectedWith, instanceOf,
  FeatureMatcher
  } from 'hamjest';
import {
  convertOneFile, 
  NoValidJsonStringError
  } from './one-file';
import fs from 'fs';
import path from 'path';

import {fromPath, destPath, jsonFiles, nonJsonFile, notExistingFile} from './helpers';


describe('convert one file', () => {
  
  describe('existing file `stars.json`', () => {
  
    const destFile = path.join(destPath, 'stars.json');
    const sourceFile = path.join(fromPath, 'stars.json');
    let promise; 
  
    beforeEach(() => { 
      if (fs.existsSync(destFile)) fs.unlinkSync(destFile);
      promise = convertOneFile(sourceFile, destFile);
    });
  
    it('returns a promise that fulfills', () => {
      return promiseThat(promise, is(fulfilled()));
    });
  
    it('writes the destination file', () => {
      return promise.then(() => assert(fs.existsSync(destFile), 'Destination file missing.'));
    });
  
    it('is minified', () => {
      return promise.then(() => {
        const jsonFile = fs.readFileSync(destFile, 'utf8');
        assertThat(jsonFile, is(JSON.stringify(JSON.parse(jsonFile))))
      });
    });
    
  });

  describe('fails', () => {
  
    const validJsonFile = path.join(fromPath, 'stars.json');
    const invalidDestFile = path.join(destPath, 'not-a-directory', 'stars.json');
  
    it('for a not existing file', () => {
      const promise = convertOneFile(notExistingFile, '');
      return promiseThat(promise, is(rejected()));
    });
  
    it('for a non-JSON file with NoValidJsonStringError', () => {
      const promise = convertOneFile(nonJsonFile, '');
      return promiseThat(promise, isRejectedWith(instanceOf(NoValidJsonStringError)));
    });
  
    it('for an invalid destination path', () => {
      const promise = convertOneFile(validJsonFile, invalidDestFile);
      return promiseThat(promise, is(rejected()));
    });
  
  });
  
});
