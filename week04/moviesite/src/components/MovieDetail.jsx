// CastProfile.jsx
import styled from "styled-components";

const CastImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: solid white 2px;
  object-fit: cover;
`;

const CastProfileContainer = styled.div`
  width: 130px;
  height: 130px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CastName = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: white;
`;

const CastRole = styled.p`
  color: grey;
  font-size: 13px;
`;

const CastProfile = ({ cast }) => {
  const url = cast.profile_path
    ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
    : "https://via.placeholder.com/80x80?text=No+Image"; // 기본 이미지 URL 설정

  return (
    <CastProfileContainer>
      <CastImg src={url} alt={`${cast.name} profile`} />
      <CastName>{cast.name}</CastName>
      <CastRole>{cast.character}</CastRole>
    </CastProfileContainer>
  );
};

export default CastProfile;
