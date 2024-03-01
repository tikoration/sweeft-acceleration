export interface Photo {
    id: string;
    urls: {
      regular: string;
    };
    alt_description: string;
  }
  
  export interface SearchProps {
    onSearch: (query: string) => void;
}

export interface CardProps {
  photo: Photo;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    id: string;
    urls: {
      regular: string;
    };
    alt_description: string;
    views: string;
    likes: string;
    downloads: string;
  } | null;
}

export interface Item {
  key: string;
  date: Date;
}
