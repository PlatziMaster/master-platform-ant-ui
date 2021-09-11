import { useMutation } from 'react-query';

export function CreateCustomers(options) {
  return useMutation(
    body => fetch('https://fakestorm/users', {
      method: 'POST',
      body: JSON.stringify(body)
    }),
    options
  );
}
