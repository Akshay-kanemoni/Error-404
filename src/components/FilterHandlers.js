export function FilterHandlers(setIsCurrentState, isCurrentState) {
    const handleHighToLowPrice = () => {
        setIsCurrentState(isCurrentState.sort((a, b) => {
            if (a.price > b.price)
                return -1;
            if (a.price < b.price)
                return 1;
            return 0;
        }));
    };

    const handleLowToHighPrice = () => {
        setIsCurrentState(isCurrentState.sort((a, b) => {
            return a.price - b.price;
        }));
    };
    const handleHighToLowRating = () => {
        setIsCurrentState(isCurrentState.sort((a, b) => {
            if (a.rating > b.rating)
                return -1;
            if (a.rating < b.rating)
                return 1;
            return 0;
        }));
    };

    const handleLowToHighRating = () => {
        setIsCurrentState(isCurrentState.sort((a, b) => {
            return a.rating - b.rating;
        }));
    };
    return { handleHighToLowPrice, handleLowToHighPrice, handleHighToLowRating, handleLowToHighRating };
}
