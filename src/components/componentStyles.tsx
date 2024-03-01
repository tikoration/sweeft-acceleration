import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  gap: 50px;
  justify-content: space-between;
  padding: 20px 100px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

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

    a {
      text-decoration: none;
      color: black;
      transition: color 0.2s ease;
    }

    a:hover {
      color: #808080;
    }
  }

  @media screen and (max-width: 848px) {
    flex-direction: column;
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
      width: auto;
      max-width: 600px;
      max-height: 500px;
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
      color: #999999;
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
  top: 50px;
  margin-left: 170px;

  input {
    padding: 10px;
    width: 300px;
    background-color: #eeeeee;
    border: none;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 1076px) {
      width: 200px;
    }
    @media screen and (max-width: 975px) {
      width: 150px;
    }
    @media screen and (max-width: 924px) {
      width: 100px;
    }
    @media screen and (max-width: 877px) {
      width: 250px;
    }
  }

  @media screen and (max-width: 877px) {
    position: relative;
    top: 0px;
    margin-left: 0px;
    margin-top: 0px;
  }
`;

export const CardDiv = styled.div`
  .card-image {
    width: 300px;
    height: 300px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const HistoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .search-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.2s ease;
    border: 1px solid #e0e0e0;

    &:hover {
      background-color: #f0f0f0;
    }

    .key-and-logo {
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
      color: #666666;
      font-size: 18px;
    }
  }
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(-5px);
  }

  img {
    width: 16px;
  }
`;
