"use client";
import { redirect } from "next/dist/server/api-utils";

import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";



const NewUserPage = () => {

    const router = useRouter()

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email")
        console.log(name, email);

        const newUsers = Object.fromEntries(formData.entries());
        console.log(newUsers)


        // Todo: Send new user daa to  the server
        
            const req = await fetch('http://localhost:8000/users',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(newUsers)
            })
           const res = await req.json();
         
           if(res.success){
            alert("User created Successfully")
           // ✅  redirect
      router.push("/users");
           }
    }



    return (
        <div>
            <h2>Create a new user</h2>
               <Form className="w-full max-w-96 mx-auto p-10" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
         
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">
            <FloppyDisk />
          Create User
          </Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
        </div>
    );
};

export default NewUserPage;