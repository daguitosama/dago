export const useNavPictureRenderSignal = () => {
    const renderNavPicture = useState("renderNavPicture", () => false);
    function on() {
        renderNavPicture.value = true;
    }
    function off() {
        renderNavPicture.value = false;
    }
    return {
        renderNavPicture,
        on,
        off,
    };
};
