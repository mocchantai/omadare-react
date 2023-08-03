import React, {useEffect, useRef, useState} from 'react';
import "./_SelectCommunity.scss";


interface Community {
    id: number;
    name: string;
}

const SelectCommunity = () => {

    const [communities, setCommunities] = useState<Community[]>([
        {id: 1, name: "コミュニティ1"},
        {id: 2, name: "コミュニティ2"},
        {id: 3, name: "コミュニティ3"},
        {id: 4, name: "コミュニティ4"},
        {id: 5, name: "コミュニティ5"},
        {id: 6, name: "コミュニティ6"},
        {id: 7, name: "コミュニティ7"},
        {id: 8, name: "コミュニティ8"},
        {id: 9, name: "コミュニティ9"},
        {id: 10, name: "コミュニティ10"},
        {id: 11, name: "コミュニティ11"},
        {id: 12, name: "コミュニティ12"},
    ]);
    const [showAllCommunities, setShowAllCommunities] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const tagContainerRef = useRef<HTMLDivElement>(null);

    const handleTagSelect = (tag: string) => {
        setSelectedTags((prevTags) => {
            if (prevTags.includes(tag)) {
                return prevTags.filter((t) => t !== tag);
            } else {
                return [...prevTags, tag];
            }
        });
    };

    const toggleShowAllCommunities = () => {
        setShowAllCommunities((prevValue) => !prevValue);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                tagContainerRef.current &&
                !tagContainerRef.current.contains(event.target as Node)
            ) {
                setShowAllCommunities(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);



    return (
        <>
            <label htmlFor="community_name">コミュニティ</label>
            <div
                className={`tag-container ${showAllCommunities ? "scrollable" : ""}`}
                ref={tagContainerRef}
            >
                {showAllCommunities ? (
                    <div className="tag-container__list">
                        {communities.map((community) => (
                            <div
                                key={community.id}
                                className={`tag-container__tag ${
                                    selectedTags.includes(community.name) ? "selected" : ""
                                }`}
                                onClick={() => handleTagSelect(community.name)}
                            >
                                {community.name}
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {communities.slice(0, 3).map((community) => (
                            <div
                                key={community.id}
                                className={`tag-container__tag ${
                                    selectedTags.includes(community.name) ? "selected" : ""
                                }`}
                                onClick={() => handleTagSelect(community.name)}
                            >
                                {community.name}
                            </div>
                        ))}
                    </>
                )}
                {communities.length > 3 && (
                    <div className="tag-container__toggle" onClick={toggleShowAllCommunities}>
                        <span>{showAllCommunities ? "閉じる" : "もっと見る"}</span>
                    </div>
                )}
            </div>
            <div className="selected-tags">
                {selectedTags.map((tag) => (
                    <span key={tag} className="selected-tags__tag">{tag}</span>
                ))}
            </div>
        </>
    );
}

export default SelectCommunity;
