import {withAllFilesInDir} from './read-files';
import {
  hasItems,
  promiseThat, isFulfilledWith
} from 'hamjest';
import {
  fromPath, fileNames
} from './helpers';

describe('all files in a dir', function() {
  
  it('finds all files', function() {
    const promise = withAllFilesInDir(fromPath);
    const files = fileNames.json;
    return promiseThat(promise, isFulfilledWith(hasItems(...files)));
  });
  
});
