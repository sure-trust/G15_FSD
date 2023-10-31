import React from "react";
import galleryImages from "./galleryimages"; // Assuming this is the correct import path
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const MasonryImagesGallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoint={{ 350: 1, 768: 3, 992: 4 }}>
            <Masonry gutter="1rem">
                {galleryImages.map((item, index) => ( // Use parentheses to wrap the parameters of the map function
                    <img
                    className="masonry__img"
                        src={item}
                        key={index}
                        alt=""
                        style={{ width: "100%", display: "block", borderRadius: "10px" }} // Correct the style object format
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default MasonryImagesGallery;
