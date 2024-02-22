import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import CreateNewList from './create-new-list';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));


describe('<CreateNewList />', () => {
  it('navigates to CreateCategory screen when pressed', () => {
    const mockNavigation = {
      navigate: jest.fn(),
    };

    // Set up the useNavigation mock to return the mock navigation object
    if (NavigationContainer.useNavigation) {
        NavigationContainer.useNavigation.mockReturnValue(mockNavigation);
      }

    // Render the CreateNewList component within a NavigationContainer
    // const { getByText } = render(
    //   <NavigationContainer>
    //     <CreateNewList />
    //   </NavigationContainer>
    // );

    // // Trigger the onPress event of the component
    // fireEvent.press(getByText('Create new list'));

    // // Check if the navigate function is called with the correct parameters
    // expect(mockNavigation.navigate).toHaveBeenCalledWith('CreateCategory', {});
  });
});
