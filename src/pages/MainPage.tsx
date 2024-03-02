import React, { useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Card from "../components/Card";
import { GalleryGrid, Loading } from "../components/componentStyles";
import { useQuery } from "@tanstack/react-query";
import useLocalStorage from "../hooks/useLocalStorage";
import { Photo } from "../interfaces/Interfaces";
import { ACCESS_KEY } from "../Access_key";

const MainPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [, setSearchHistory] = useLocalStorage("searchHistory", [])
  const [page, setPage] = useState(1);
  const [popPhotos, setPopPhotos] = useState<Photo[]>([]);
  const [searchPhotos, setSearchPhotos] = useState<Photo[]>([]);

  // Fetching data
  const fetchData = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };

  // Fetching data for popular photos
  const {
    data: searchData,
    isLoading: searchLoading,
    isError: searchError,
  } = useQuery({
    queryKey: ["searchData", searchQuery, page],
    queryFn: () =>
      fetchData(
        `https://api.unsplash.com/search/photos?query=${searchQuery}&page=${page.toString()}&per_page=20&client_id=${
          ACCESS_KEY
        }`
      ),
  });

  // Fetching data for searched photos
  const {
    data: popularData,
    isLoading: popularLoading,
    isError: popularError,
  } = useQuery({
    queryKey: ["popularData", page],
    queryFn: () =>
      fetchData(
        `https://api.unsplash.com/photos?order_by=popular&page=${page.toString()}&per_page=20&client_id=${
          ACCESS_KEY
        }`
      ),
  });

  // Function to load more photos when scrolling
  const loadMorePhotos = () => {
    setPage((prevPage) => prevPage + 1);
  };  

  // Custom hook for infinite scrolling
  useInfiniteScroll(loadMorePhotos);

  // Updating photo state when data changes
  useEffect(() => {
    if (popularData) {
      setPopPhotos((prevPhotos) => {
        const newPhotos = popularData
          .filter((photo: Photo) => {
            return !prevPhotos.some((prevPhoto) => prevPhoto.id === photo.id);
          })
          .map((photo: any) => ({
            id: photo.id,
            urls: { regular: photo.urls.regular },
            alt_description: photo.alt_description,
          }));
        return [...prevPhotos, ...newPhotos];
      });
    }
    if (searchData) {
      setSearchPhotos((prevPhotos: Photo[]) => {
        const newPhotos = searchData.results
          .filter((photo: Photo) => {
            return !prevPhotos.some((prevPhoto) => prevPhoto.id === photo.id);
          })
          .map((photo: Photo) => ({
            id: photo.id,
            urls: { regular: photo.urls.regular },
            alt_description: photo.alt_description,
          }));
        return [...prevPhotos, ...newPhotos];
      });
    }
  }, [popularData, searchData]);

  // Function to debounce search input
  const debounce = (func: Function, delay: number) => {
    let timer: NodeJS.Timeout;
    return function (this: any, ...args: any[]) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // debounced search function
  const delayedSearch = debounce((query: string) => {
    setSearchQuery(query);
    setSearchPhotos([]);
    if(query !== ''){
      setSearchHistory(prevState => [{key: query, date: new Date()}, ...prevState]);
    }
  }, 600);

  const handleSearch = (query: string) => {
    delayedSearch(query);
  };

  const photos = searchQuery ? searchPhotos : popPhotos;
  if (popularError || searchError) return <div>Sorry, something went wrong</div>;

  return (
    <>
      <SearchBox onSearch={handleSearch} />
      <GalleryGrid>
        {photos.map((photo: Photo, index: number) => (
          <Card key={index} photo={photo} />
        ))}
      </GalleryGrid>
      {(popularLoading || searchLoading) && <Loading>Loading...</Loading>}
    </>
  );
};

export default MainPage;
