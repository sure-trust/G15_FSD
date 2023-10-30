const calculateAvgRating = reviews => {

    const totalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
    const avgRating = totalRating === 0
        ? ""
        : totalRating === 1
            ? totalRating
            : (totalRating / reviews?.length).toFixed(1);

    return {
        totalRating: avgRating, // Renamed totalRating to avgRating
        avgRating, // This is the calculated average rating
    };
};

export default calculateAvgRating;
