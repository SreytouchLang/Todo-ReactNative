import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import TaskActions from './task-actions';

// Mock axiosInstance and useSWRConfig as needed
jest.mock('axios');
jest.mock('swr');
jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
}));

// Mock any other dependencies as needed
jest.mock('../../utils/theme', () => ({
    useTheme: () => ({
        colors: {
            lightGray: '#CCCCCC',
            gray250: '#DDDDDD',
            gray500: '#888888',
        },
    }),
}));

// Mock axiosInstance and its properties
jest.mock('@/services/config', () => ({
    __esModule: true,
    default: {
      interceptors: {
        request: {
          use: jest.fn(),
        },
      },
    },
}));

describe('<TaskActions />', () => {
    it('navigates to CreateCategory screen when pressed', async () => {
        // Mock useSWRConfig mutate function
        const mockMutate = jest.fn();

        // Mock useSWRConfig
        jest.mock('swr', () => ({
            ...jest.requireActual('swr'),
            useSWRConfig: jest.fn(() => ({
                mutate: mockMutate,
            })),
        }));

        // Mock axiosInstance and its properties
        jest.mock('@/services/config', () => ({
            __esModule: true,
            default: {
            interceptors: {
                request: {
                use: jest.fn(),
                },
            },
            },
        }));

        // // Render the TaskActions component
        // const { getByPlaceholderText, getByTestId, getByText } = render(
        //     <TaskActions categoryId="categoryId" />
        // );

        // // Trigger input change and submit
        // const taskInput = getByPlaceholderText('Create a new task');
        // fireEvent.changeText(taskInput, 'New Task');
        // fireEvent(taskInput, 'submitEditing');

        // // Check if mutate function is called
        // await waitFor(() => {
        //     expect(mockMutate).toHaveBeenCalledWith('tasks/');
        // });

        // // Trigger date selection
        // fireEvent.press(getByTestId('dateSelectionButton'));

        // // Check if date is updated
        // expect(getByText(`Today`)).toBeTruthy();

        // // Trigger category selection
        // fireEvent.press(getByTestId('categorySelectionButton'));

        // // Check if category is updated
        // expect(getByText('TestCategory')).toBeTruthy();
    });
});
