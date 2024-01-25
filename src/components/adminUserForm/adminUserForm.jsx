"use client"

import styles from  './adminUserForm.module.module.css'
import { addUser } from '@/lib/action'
import {useFormState} from 'react-dom'
// admin 
const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
  
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email"/>
      <input type="password" name="password" placeholder="password"/>
      <input type="text" name="img" placeholder="img" />
       <select name="isAdmin">
        <option value=""></option>
       </select>
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminUserForm;