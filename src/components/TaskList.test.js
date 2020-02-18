
import React from 'react';
import ReactDOM from 'react-dom';
import { WithPinnedTasks } from './TaskList.stories';

/* 

  Note that we’ve been able to reuse the WithPinnedTasks 
  story in our unit test; in this way we can continue to leverage an existing resource 
  (the examples that represent interesting configurations of a component) in many ways. 
  
  Notice as well that this test is quite brittle. It's possible that as the project matures, 
  and the exact implementation of the Task changes --perhaps using a different classname or a 
  textarea rather than an input--the test will fail, and need to be updated. This is not necessarily 
  a problem, but rather an indication to be careful about liberally using unit tests for UI.
  They're not easy to maintain.

*/

it('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WithPinnedTasks />, div);

  // We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
});