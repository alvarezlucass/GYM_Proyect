import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { userFormContext } from '../Context/userContext';


const UserRegister = ({condition = true}) => {

  // const [ registerForm, setRegisterFromForm ] = useState ({
  //   firtName:'',
  //   lastName: '',
  //   email: '',
  //   password: '',
      //  date: '',
      //  dni: '',

  // })

  // const { formContext } = userFormContext();
//   const handleOnSubmit = (e) => {
//     e.preventDefault();
// }
// let createUsers = {}
//       createUsers.date = firebase.firestore.Timestamp.fromDate( new Date());
//       createUsers.register = registerForm
//       createUsers.users = userList.map(cartItem =>{
//               const id = cartItem.i.id;
//               const title = cartItem.i.title;
//               const price = cartItem.i.price * cartItem.quantity;

//                   return {id, title, price}


  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Por favor cargue Aqui, toda la información requerida</Label>
        <Input plaintext value="Cada campo es importante para el registro de salidas " />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Ingrese su email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Ingrese su Clave por Favor"
        />
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleNumber">Número de DNI</Label>
        <Input
          type="number"
          name="dni"
          id="exampleNumber"
          placeholder="Ingrese su número de DNI"
        />
      </FormGroup>
     
      <FormGroup>
        <Label for="exampleDate">Fecha de nacimiento</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleFile">Ingrese su Foto</Label>
        <Input type="file" name="file" id="exampleFile" />
       
      </FormGroup>
      
      <FormGroup check>
       
      </FormGroup>
      
    </Form>
  );
}

export default UserRegister;