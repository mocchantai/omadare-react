import React from "react";

type SearchBarProps = {
    onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
    keyword: string;
    setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export default SearchBarProps;
