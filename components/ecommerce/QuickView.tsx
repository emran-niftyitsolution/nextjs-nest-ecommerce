'use client';

import React from "react";
import { connect } from "react-redux";
import { Modal } from 'react-responsive-modal';
import { closeQuickView } from '../../redux/action/quickViewAction';
import ProductDetails from "./ProductDetails";

interface Image {
    src: string;
}

const images: Image[] = [
    { src: "/images/offer/offer-1.jpg" },
    { src: "/images/offer/offer-2.jpg" },
    { src: "/images/offer/offer-3.jpg" },
];

interface QuickViewProps {
    quickView: any;
    closeQuickView: () => void;
}

const QuickView: React.FC<QuickViewProps> = ({ quickView, closeQuickView }) => {
    const settings = {
        customPaging: function (i: number) {
            return (
                <a>
                    <img src={images[i].src} width="75" />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Modal open={quickView ? true : false} onClose={closeQuickView}>
                {quickView && (
                    <div className="quick-view">
                        <ProductDetails product={quickView} quickView={quickView} />
                    </div>
                )}
            </Modal>
        </>
    );
};

const mapStateToProps = (state: any) => ({
    quickView: state.quickView,
});

export default connect(mapStateToProps, { closeQuickView })(QuickView);

