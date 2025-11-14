'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateProductFilters } from "../../../redux/action/productFiltersAction";
import CheckBox from "./Checkbox";

interface VendorItem {
    value: string;
    checked: boolean;
    name: string;
}

interface VendorFilterProps {
    updateProductFilters: (filters: { vendor: string[] }) => void;
}

const VendorFilter: React.FC<VendorFilterProps> = ({ updateProductFilters }) => {
    const [sizes, setSizeCheckbox] = useState<VendorItem[]>(
        [
            { value: "NestFood", name: "NestFood", checked: false },
            { value: "stouffer", name: "stouffer", checked: false },
            { value: "starKist", name: "starKist", checked: false },
            { value: "aldi", name: "aldi", checked: false },
            { value: "adidas", name: "adidas", checked: false },
            { value: "Costco", name: "Costco", checked: false },
            { value: "Harris", name: "Harris", checked: false },
            { value: "iSnack", name: "iSnack", checked: false },
            { value: "Burbe", name: "Burbe", checked: false }
        ]
    );

    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('search');

    const [selectedVendor, setVendor] = useState<string[]>([]);

    useEffect(() => {
        const filters = {
            vendor: selectedVendor
        };

        updateProductFilters(filters);
    }, [selectedVendor, searchTerm, updateProductFilters]);

    const handleCheckBox = (
        event: React.ChangeEvent<HTMLInputElement>,
        filters: VendorItem[],
        updatefilters: (filters: VendorItem[]) => void,
        selectFilter: (filters: string[]) => void,
        text: string[]
    ) => {
        const value = event.target.value;
        const updateSizes = filters;

        updateSizes.forEach((item) => {
            if (item.value === value) {
                if (item.checked) {
                    item.checked = false;
                    const newsize = text.filter((item) => item !== value);
                    selectFilter([...newsize]);
                } else {
                    item.checked = true;
                    const newsize = text.includes(value) ? text : [...text, value];
                    selectFilter([...newsize]);
                }
            }
        });

        updatefilters([...updateSizes]);
    };

    return (
        <>
            <div className="custome-checkbox">
                <CheckBox
                    filters={sizes}
                    handleCheckBox={(e) => {
                        handleCheckBox(e, sizes, setSizeCheckbox, setVendor, selectedVendor);
                    }}
                />
            </div>
        </>
    );
};

const mapStateToProps = (state: any) => ({
    products: state.products.items
});

const mapDidpatchToProps = {
    updateProductFilters
};

export default connect(mapStateToProps, mapDidpatchToProps)(VendorFilter);

