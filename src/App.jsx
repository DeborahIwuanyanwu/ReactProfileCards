import styled from "@emotion/styled";
import Profile from "./components/Profile";
import Header from "./components/Header";
const App = () => {
  return (
    <>
       <Header />
      <Container>
   
        <Profile
          name="Deborah"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit.lorem ipsum dolor?"
          bg="beige"
          bg1="blue"
          iconC="hgh"
          changeIcon=""
        />
        <Profile
          name="Deborah"
          content="Props is a function that allows you to pass data from parent to offspring"
          bg="lightgray"
          iconC=""
          changeIcon="hgk"
        />
       
        {/* <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile /> */}
        
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  height: 88svh;
  gap: 20px;
  background-color: #8384b2;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`; 