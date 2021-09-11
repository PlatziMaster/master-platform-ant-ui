import CustomerForm from './../forms/customer.form';
import { CreateCustomers } from './../../services/customer.service';
import { notification } from "antd";

function CustomerFormPage() {

  const mutation = CreateCustomers({
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (response) => {
      console.log(response);
      notification.open({
        message: 'Error',
        description:
          'Error',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    }
  });
  console.log(mutation);

  const handleSubmit = (values) => {
    mutation.mutate(values);
  }

  return (
    <div >
      <h1>Soy la pagina del crear un cliente</h1>
      <CustomerForm isLoading={mutation.isLoading} handleSubmit={handleSubmit}></CustomerForm>
    </div>
  );
}

export default CustomerFormPage;
