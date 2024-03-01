import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;

  padding: 0px 80px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;

  img {
    width: 55px;
    height: 55px;
  }

  .titles {
    display: flex;
    gap: 50px;
    justify-content: space-between;
    font-size: 22px;
    align-items: center;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    position: relative;

    img {
      width: 500px;
      margin: 10px;
    }

    .modal-close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-size: 18px;
    }
  }
`;

export const GalleryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

export const SearchBar = styled.div`
  position: absolute;
  top: 30px;
  margin-left: 160px;

  input {
    padding: 10px;
    width: 300px;
    background-color: #eeeeee;
    border: none;
    border-radius: 10px;

    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }

`;
export const CardDiv = styled.div`
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 6px;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
`;

export const HistoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .search-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    border: 1px solid black;
    border-radius: 10px;
    padding: 0px 20px;
    cursor: pointer;

    .key-and-logo{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;
    }

    img {
      width: 50px;
      height: 50px;
    }

    h3 {
      color: grey;
    }
  }
`;

export const BackButton = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px 0px; 
    padding: 0;
    align-self: flex-start;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    img{
      width: 16px;
      height: 16px;
    }
`