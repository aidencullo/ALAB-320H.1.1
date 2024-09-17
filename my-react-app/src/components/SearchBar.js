import styled from "styled-components"

const SearchBarContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50px;
	background-color: #f2f2f2;
	border-radius: 5px;
	margin: 10px 0;
`;

const SearchBarInput = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background-color: transparent;
	font-size: 1.2rem;
	padding: 0 10px;
`;

export default function SearchBar() {
  return (
      <SearchBarContainer>
      <SearchBarInput type="text" placeholder="Search for a movie..." />
      </SearchBarContainer>
  )
}
