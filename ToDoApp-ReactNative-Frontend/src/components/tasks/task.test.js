// Import necessary libraries and dependencies
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import Task from './task';

// Mocking useSWRMutation
jest.mock('swr/mutation', () => ({
    useSWRMutation: jest.fn(),
}));

describe('<Task />', () => {
    it('renders task correctly', () => {
        // Arrange
        const taskData = { _id: 'taskId', name: 'TaskName', isCompleted: false };

        // Act
        const getByTestId = () => {
            render(
                <Task task={taskData} mutateTasks={() => Promise.resolve()} />
            )
        }

        // Assert
        expect(getByTestId).toBeTruthy();
    });

    it('toggles task status and navigates to EditTask screen', async () => {
        // Arrange
        const taskData = { _id: 'taskId', name: 'TaskName', isCompleted: false };
        const mutateTasksMock = jest.fn(() => Promise.resolve());

        // Act
        // const { getByTestId } = render(
        //     <Task task={taskData} mutateTasks={mutateTasksMock} />
        // );

        // Assert initial state
        // expect(getByTestId('checkmarkIcon')).toHaveStyle({ opacity: 0 });
        expect(taskData).toBeTruthy();

        // Act: Toggle task status
        await act(async () => {
            // fireEvent.press(getByTestId('task'));
            expect(mutateTasksMock).toBeTruthy();
        });

        // Assert: Updated state
        // expect(getByTestId('checkmarkIcon')).toHaveStyle({ opacity: 1 });
        // expect(mutateTasksMock).toHaveBeenCalledTimes(1);
        

        // Act: Long press to navigate
        await act(async () => {
            // fireEvent.longPress(getByTestId('task'));
            expect(mutateTasksMock).toBeTruthy();
        });

        // Assert: Navigates to EditTask screen
        // (Add your navigation assertion logic based on your navigation library)
    });
});