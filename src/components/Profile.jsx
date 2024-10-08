import styled from "@emotion/styled";
import image from "../assets/international-day-education-celebration_23-2150931024.jpg";
import image2 from "../assets/png-transparent-crescent-arts-centre-facebook-inc-computer-icons-black-facebook-thumbnail-removebg-preview.png";
import image3 from "../assets/images__2_-removebg-preview (3).png";
import image4 from "../assets/images-removebg-preview (2).png";
import image5 from "../assets/images__1_-removebg-preview (2).png";
import image6 from "../assets/linkedin_512_black.png";
import image7 from "../assets/images__4_-removebg-preview.png";

const Profile = ({ name, content, bg, bg1, iconC,changeIcon }) => {
  return (
    <Card>
      <UpCard bg={bg}>
        
          <Facebook>
            <img src={image2} />
          </Facebook>
          <Plus bg1={bg1}>+</Plus>
        
      </UpCard>
      <CardContainer>
        <ProfileTexts>
          <ImageDiv>
            {" "}
            <ProfileImage>
              <img src={image} />
            </ProfileImage>
          </ImageDiv>

          <Texts>
            {" "}
            <BigText>{name}</BigText>
            <SmallText>{content}</SmallText>
          </Texts>
          <Logos>
            <Github>
              <img src={image3} />
            </Github>
            
           {iconC ? <FaceBook>
              <img src={image4} />
            </FaceBook>:null}
            <Twitter>
              <img src={image5} />
            </Twitter>
            <LinkedIn>
              <img src={image6} />
            </LinkedIn>

          {changeIcon? <Instagram>
                <img src={image7} />
              </Instagram> : null}
          </Logos>
        </ProfileTexts>
      </CardContainer>
    </Card>
  );
};
export default Profile;

const Card = styled.div`
  width: 260px;
  gap: 7px; 
  cursor: pointer;
  background-color: white; 
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 3px;
  @media (max-width: 1024px) {
  }
`;

const UpCard = styled.div`
width: 100%;
padding-top: 20px;
padding-bottom: 20px;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  background: ${({ bg }) => bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// const UpHolder = styled.div`
//   width: 90%;
//   padding: 10px;
//   margin: 0px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
const Facebook = styled.div`
  width: 27px;
  height: 27px;
  margin-left: 10px;
  border-radius: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 45px;
    object-position: center;
  }
`;
const Plus = styled.div`
  width: 23px;
  height: 23px; text-align: center ;
  border-radius: 50px;
  background-color: ${({ bg1 }) => bg1};
  font-size: 20px;
  color: white;
  margin-right: 10px;
  font-weight: bold;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardContainer = styled.div`
  width: 90%;
  margin-bottom: 30px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProfileTexts = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ImageDiv = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border: 2px solid white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;
    object-position: center;
  }
`;
const Texts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BigText = styled.div`
  font-weight: bold;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SmallText = styled.div`
  margin-top: 14px;
  font-size: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logos = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Github = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-radius: 100%; */
    object-position: center;
  }
`;
const FaceBook = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 45px;
    /* border-radius: 100%; */
    object-position: center;
  }
`;
const Twitter = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 45px;
    /* border-radius: 100%; */
    object-position: center;
  }
`;
const LinkedIn = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 45px;
    /* border-radius: 100%; */
    object-position: center;
  }
`;
const Instagram = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 45px;
    object-position: center;
  }
`;
