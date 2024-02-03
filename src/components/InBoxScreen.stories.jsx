import { Provider } from 'react-redux';
import store from '../lib/store';
import { rest } from 'msw';
import { MockedState } from './TaskList.stories';
import InBoxScreen from './InBoxScreen';
import { fireEvent, waitFor, waitForElementToBeRemoved, within } from '@storybook/test';

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
        rest.get(
          'https://jsonplaceholder.typicode.com/todos?userId=1',
          (req, res, ctx) => {
            return res(ctx.json(MockedState.tasks));
          }
        ),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitForElementToBeRemoved(await canvas.findAllByTestId('loading'));
    await waitFor(async() => {
      await fireEvent.click(canvas.getByLabelText('pinTask-1'));
      await fireEvent.click(canvas.getByLabelText('pinTask-3'));
      await fireEvent.click(canvas.getByLabelText('archiveTask-5'));
    })
  },
};

export const Error = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          'https://jsonplaceholder.typicode.com/todos?userId=1',
          (req, res, ctx) => {
            return res(ctx.status(403));
          }
        ),
      ],
    },
  },
};
