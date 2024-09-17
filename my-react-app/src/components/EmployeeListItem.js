import styled from 'styled-components';

const EmployeeListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0.5rem 0; /* Adjust margin to make sure items don't stack too far apart */
  width: 100%; /* Ensure the item takes the full width of the parent container */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

export default function EmployeeListItem({ employee }) {
  return (
    <EmployeeListItemContainer>
      <h2>{employee.name}</h2>
      <p>{employee.email}</p>
    </EmployeeListItemContainer>
  );
}
