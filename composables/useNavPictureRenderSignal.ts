export const useNavPictureRenderSignal = () => {
    const renderNavPicture = useState("renderNavPicture", () => true);
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
