import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import {
  HistoryDiv,
  GalleryGrid,
  Loading,
  BackButton,
} from "../components/componentStyles";
import clock from "../assets/clock.png";
import backButton from "../assets/arrow-left.png";
import useLocalStorage from "../hooks/useLocalStorage";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { Photo } from "../interfaces/Interfaces";
import { useNavigate } from "react-router";
import { ACCESS_KEY } from "../Access_key";

const HistoryPage: React.FC = () => {
  const [searchHistory] = useLocalStorage("searchHistory");
  const [selectedSearch, setSelectedSearch] = useState<null | string>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["searchData", selectedSearch, page],
    queryFn: () =>
      fetchData(
        `https://api.unsplash.com/search/photos?query=${selectedSearch}&page=${page.toString()}&per_page=20&client_id=${
          ACCESS_KEY
        }`
      ),
  });

  const loadMorePhotos = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useInfiniteScroll(loadMorePhotos);

  useEffect(() => {
    if (data && data.results) {
      setPhotos((prev) => {
        const updatedData: Photo[] = data.results?.filter(
          (newSearch: Photo) =>
            !prev.some((prevSearch) => prevSearch.id === newSearch.id)
        );

        return [...prev, ...updatedData];
      });
    }
  }, [data]);

  if (isError) return <div>Sorry, something went wrong</div>;
  return (
    <>
      {!selectedSearch && (
        <HistoryDiv>
          <BackButton onClick={() => navigate("/")}>
              <img src={backButton} alt="back button" />
              <h4>Back to the Gallery</h4>
          </BackButton>
          {searchHistory.map((search, index) => (
            <div
              key={index}
              className="search-card"
              onClick={() => {
                setSelectedSearch(search.key)
                setPhotos([])}}
            >
              <div className="key-and-logo">
                <img src={clock} alt="date" />
                <h2>{search.key}</h2>
              </div>
              <h3>
                {search.date.toString().split("T").join(" | ").split(".")[0]}
              </h3>
            </div>
          ))}
        </HistoryDiv>
      )}
      {selectedSearch && (
        <>
          <BackButton onClick={() => setSelectedSearch(null)}>
              <img src={backButton} alt="back button" />
              <h4>Back to the Search History</h4>
          </BackButton>
          <GalleryGrid>
            {photos.map((photo: Photo, index: number) => (
              <Card key={index} photo={photo} />
            ))}
          </GalleryGrid>
          {isLoading && <Loading>Loading...</Loading>}
        </>
      )}
    </>
  );
};

export default HistoryPage;
