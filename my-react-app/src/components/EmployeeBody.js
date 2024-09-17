import styled from 'styled-components';

// Styled components for layout and styling
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 100%; /* Make the container fill the width of its parent */
  height: 100%; /* Make the container fill the height of its parent */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px; /* Adjust size as needed */
  height: 100px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const ProfileName = styled.h2`
  margin: 0.5rem 0;
  font-size: 1.5rem;
`;

const ProfilePosition = styled.h3`
  margin: 0.5rem 0;
  font-size: 1.2rem;
  color: #666;
`;

const ProfileEmail = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #333;
`;

export default function EmployeeBody() {
  return (
    <ProfileContainer>
      <ProfileImage src="https://via.placeholder.com/100" alt="Profile" />
      <ProfileName>John Doe</ProfileName>
      <ProfilePosition>Software Engineer</ProfilePosition>
      <ProfileEmail>johndoe@example.com</ProfileEmail>
    </ProfileContainer>
  );
}
