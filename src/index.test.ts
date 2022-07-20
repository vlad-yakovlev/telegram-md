import { _toMarkdown } from './_toMarkdown';

import { md } from './index';

test('should build from template', () => {
  expect(md`Hello, @${_toMarkdown('jonny_john')}! foo_bar!!`.value).toBe('Hello, @jonny\\_john\\! foo\\_bar\\!\\!');
});
