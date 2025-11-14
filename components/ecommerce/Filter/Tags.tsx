'use client';

import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProductFilters } from "../../../redux/action/productFiltersAction";

interface Tag {
    value: string;
}

interface TagsProps {
    updateProductFilters: (filters: { tags: string }) => void;
}

const Tags: React.FC<TagsProps> = ({ updateProductFilters }) => {
    const tags: Tag[] = [
        { value: "" },
        { value: "snack" },
        { value: "milk" },
        { value: "fruit" },
        { value: "broccoli" },
        { value: "salad" },
        { value: "appetizer" },
    ];
    const [selectedTags, setTags] = useState<string>("");
    const [active, setActive] = useState<number>(0);
    useEffect(() => {
        const filters = {
            tags: selectedTags, //
        };

        updateProductFilters(filters);
    }, [selectedTags, updateProductFilters]);

    const handleClick = (i: number, target: string) => {
        setTags(target);
        setActive(active == i ? 0 : i);
    };
    return (
        <>
            <ul className="tags-list">
                {tags.map((tag, i) => (
                    <li  className="hover-up" onClick={() => handleClick(i, tag.value)} key={i}>
                        <a
                            className={
                                active == i
                                    ? "cat-item text-brand-2"
                                    : "cat-item text-brand"
                            }
                        ><i className="fi-rs-cross mr-10"></i>
                            {i == 0 ? "All" : `${tag.value}`}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
};

const mapDidpatchToProps = {
    updateProductFilters,
};

export default connect(null, mapDidpatchToProps)(Tags);

