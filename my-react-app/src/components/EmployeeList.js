import EmployeeListItem from './EmployeeListItem'; // Import the EmployeeListItem component

const employees = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@email.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@email.com",
  },
  {
    id: 3,
    name: "Emily Smith",
    email: "emilysmith@email.com",
  },
  {
    id: 4,
    name: "Michael Johnson",
    email: "michaeljohnson@email.com",
  },
  {
    id: 5,
    name: "Sarah Williams",
    email: "sarahwilliams@email.com",
  },
  {
    id: 6,
    name: "David Brown",
    email: "davidbrown@email.com",
  },
  {
    id: 7,
    name: "Laura Davis",
    email: "lauradavis@email.com",
  },
  {
    id: 8,
    name: "James Wilson",
    email: "jameswilson@email.com",
  },
  {
    id: 9,
    name: "Olivia Martinez",
    email: "oliviamartinez@email.com",
  },
  {
    id: 10,
    name: "Daniel Garcia",
    email: "danielgarcia@email.com",
  },
];

export default function EmployeeList() {
  return (
    <div>
      {employees.map((employee) => (
        <EmployeeListItem key={employee.id} employee={employee} />
      ))}
    </div>
  );
}
