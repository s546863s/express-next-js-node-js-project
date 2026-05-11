import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@heroui/react";
import { use } from "react";

const UserList = ({usersPromise}) => {
const users = use(usersPromise);


    return (
        <div>
            <h3>Users inside user List: {users.length}</h3>
           <div className="grid grid-cols-4 gap-4">
             {
                users.map(user => 
                    <Card key={user.id}>
                      <CardTitle >Name: {user.name}</CardTitle>
                      <CardContent>Email: {user.email}</CardContent>
                      <CardDescription>Age: {user.age}</CardDescription> 
                      <CardHeader>Location: {user.city}</CardHeader>

                    </Card>
                )
            }
           </div>
        </div>
    );
};

export default UserList;