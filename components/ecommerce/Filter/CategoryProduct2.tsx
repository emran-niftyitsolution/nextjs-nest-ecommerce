'use client';

import { useRouter } from "next/navigation";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

interface CategoryProduct2Props {
    updateProductCategory: (category: string) => void;
}

const CategoryProduct2: React.FC<CategoryProduct2Props> = ({ updateProductCategory }) => {
    const router = useRouter();

    const selectCategory = (e: React.MouseEvent, category: string) => {
        e.preventDefault();
        updateProductCategory(category);
        router.push(`/products?cat=${encodeURIComponent(category)}`);
    };
    return (
        <>
            <ul>
                <li onClick={(e) => selectCategory(e, "jeans")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-1.svg"
                            alt="nest"
                        />
                        Milks & Dairies
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "shoe")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-2.svg"
                            alt="nest"
                        />
                        Clothing
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "jacket")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-3.svg"
                            alt="nest"
                        />
                        Pet Foods{" "}
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "trousers")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-4.svg"
                            alt="nest"
                        />
                        Baking material
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "accessories")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-5.svg"
                            alt="nest"
                        />
                        Fresh Fruit
                    </a>
                </li>
            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct2);

