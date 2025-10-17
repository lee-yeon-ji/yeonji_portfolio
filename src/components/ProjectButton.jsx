
export default  function ProjectButton(text) {
    return (
        <>
            <button className="rounded-full px-5 py-2 transition max-sm:w-full max-sm:text-xs bg-superLightGray text-mainColorBlack font-bold hover:bg-superLightGray hover:text-mainColorBlack">
                ${text}
            </button>
        </>
    );
};