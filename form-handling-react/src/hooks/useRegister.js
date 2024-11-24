import { useMutation } from 'react-query';

const mockRegisterAPI = async (userData) => {
  // Simulate an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData.username && userData.email && userData.password) {
        resolve({ success: true, message: 'User registered successfully!' });
      } else {
        reject(new Error('Missing required fields'));
      }
    }, 1000);
  });
};

export const useRegister = () => {
  return useMutation(mockRegisterAPI);
};
