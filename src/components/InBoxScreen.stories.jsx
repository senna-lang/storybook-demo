import { Provider } from 'react-redux';
import store from '../lib/store';
import { rest } from 'msw';
import { MockedState } from './TaskList.stories';
import InBoxScreen from './inBoxScreen';

export default {
  component: InBoxScreen,
  title: 'InBoxScreen',
  tags: ['autodocs'],
  decorators: [story => <Provider store={store}>{story()}</Provider>],
};

export const Default = {
   parameters: {
      msw: {
         handlers: [
            rest.get('https://jsonplaceholder.typicode.com/todos?userId=1',
            (req,res,ctx) => {
               return res(ctx.json(MockedState.tasks));
            })
         ]
      }
   }
};
