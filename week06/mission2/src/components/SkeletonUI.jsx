import styled from "styled-components";

const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const SkeletonBox = styled.div`
  width: 150px;
  height: 225px;
  background-color: #333;
  border-radius: 10px;
  opacity: 0.6;
`;

const SkeletonUI = () => {
  return (
    <SkeletonContainer>
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonBox key={index} />
      ))}
    </SkeletonContainer>
  );
};

export default SkeletonUI;
