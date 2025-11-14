'use client';

import { useRouter } from "next/navigation";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

interface CategoryProductProps {
    updateProductCategory: (category: string) => void;
}

const CategoryProduct: React.FC<CategoryProductProps> = ({ updateProductCategory }) => {
    const router = useRouter();

    const selectCategory = (e: React.MouseEvent, category: string) => {
        e.preventDefault();
        updateProductCategory(category);
        router.push(`/products?cat=${encodeURIComponent(category)}`);
    };
    return (
        <>
            <ul>
                <li onClick={(e) => selectCategory(e, "")}>
                    <a>All</a>
                </li>
                <li onClick={(e) => selectCategory(e, "jeans")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-1.svg"
                            alt="nest"
                        />
                        Milks & Dairies
                    </a>
                    <span className="count">30</span>
                </li>
                <li onClick={(e) => selectCategory(e, "shoe")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-2.svg"
                            alt="nest"
                        />
                        Clothing
                    </a>
                    <span className="count">35</span>
                </li>
                <li onClick={(e) => selectCategory(e, "jacket")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-3.svg"
                            alt="nest"
                        />
                        Pet Foods{" "}
                    </a>
                    <span className="count">42</span>
                </li>
            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct);

